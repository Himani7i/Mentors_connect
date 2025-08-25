import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/student-login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (response.data) {
      alert("logged in successfully ");
      navigate("/");
    } else {
      alert("not logged in ");
    }
  };
  return (
    /* code upload krne ke liye  */
    <div className="flex justify-center items-center h-screen bg-gray-700 ">
      <div className=" p-6 rounded-lg shadow-md w-120 h-100 bg-gray-900 outline-2 outline-white">
        <h2 className="text-4xl font-semibold text-blue-200 text-center mb-15">
          Student Login
        </h2>
        <form className="space-y-8"> 
          <input
            type="email"
            placeholder="your@email.com"
            onChange={(e) => setemail(e.target.value)}
            className="w-full p-2 border text-xl rounded-lg focus:ring-2 text-blue-200 focus:ring-indigo-400 outline-none"
          />
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border text-xl rounded-lg focus:ring-2 text-blue-200 focus:ring-indigo-400 outline-none"
          />
          <button
            className="w-full bg-indigo-600 text-xl text-white p-2 rounded-lg hover:bg-indigo-700 transition"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
        <p className="text-lg  text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign-up-student" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
