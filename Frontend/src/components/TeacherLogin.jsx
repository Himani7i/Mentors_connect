import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/teacher-login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    response.data
      ? alert("logged in successfully ")
      : alert("login failed ! try again");
    
    response.data ? navigate("/teacher-dashboard") : navigate("/teacher-login");
  };
  return (
    /* code upload krne ke liye  */
    <div className="flex items-center justify-center h-screen bg-gray-700  ">
      <form className="w-120 h-120 border-3 rounded-xl bg-gray-900 ">
        <div className="p-5">
          <h2 className="text-4xl font-semibold text-blue-200 text-center mb-15">
          Teacher Login
          </h2>
          <div className="mb-4 ">
            <input
              type="email"
              className="w-full p-3 border text-xl text-blue-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              onChange={(e) => setemail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            
            <input
              type="password"
              className="w-full p-3 border text-xl border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-blue-200 transition"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <a
              href="#"
              className="text-lg text-indigo-600 hover:text-indigo-800"
            >
              Forgot password?
            </a>
          </div>
          <button
            className="w-full bg-indigo-600 text-white p-3 text-xl rounded-lg font-medium hover:bg-indigo-700 transition"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p className="text-center mt-6 text-lg text-gray-600">
            Don't have an account?{" "}
            <Link to="/sign-up-teacher" className="text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default TeacherLogin;
