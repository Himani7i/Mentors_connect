import React, { useState } from "react";
import axios from "axios";

const StudentLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:1104/student-login", {
      email,
      password,
    });
    response.data
      ? alert("logged in successfully ")
      : alert("login failed ! try again");
  };
  return (
    /* code upload krne ke liye  */
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Student Login
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
