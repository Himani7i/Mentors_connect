import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //dynamically handling event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mentors-connect-2.onrender.com/login", {
        email,
        password,
      });
      console.log(response);
    } catch (err) {
      setError("Login failed. Please try again.");
      setMessage("");
    }
  };

  return (
    // yaha ye output wapas render hora hai ie div element
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 p-6">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white">
        <h2 className="text-center text-4xl font-extrabold text-gray-900">
          Log In
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Access your account by entering your details
        </p>
        {message && <p className="text-center text-green-500">{message}</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <form className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg font-bold transition duration-300 shadow-lg"
            onClick={handleSubmit}
          >
            Log In
          </button>
          //click karooooooo
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
