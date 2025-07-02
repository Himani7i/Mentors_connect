import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";

export default function Signup_student() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setprofession] = useState("");
  const [degree, setdegree] = useState("");
  const [passingYear, setpassingYear] = useState("");
  let skills_arr = [] ;

  // ye function axios request bhej raha hai
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://mentors-connect-2.onrender.com/sign-up-student", {
      name,
      email,
      password,
      profession,
      degree,
      passingYear,
      skills_arr,
    });
    alert(response.data);
  };

  const Make_arr = (i) => {
    const text = document.getElementById(`skill_button${i}`).innerText;
    skills_arr.push(text);
  };

  return (
    <div className="flex bg-gray-700 justify-evenly">
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-gray-900 ">
          <h2 className="text-center text-3xl font-bold text-blue-200">
            Sign Up (mentee)
          </h2>
          <p className="text-center bg-gray-900 text-blue-200 mb-6">
            Join us by filling out the form below
          </p>
          <form className="space-y-6">
            {/* yaha saare input liye gaye hain  */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(e) => setname(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-900 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              maxLength={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-900 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              maxLength={35}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-900 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              maxLength={20}
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              onChange={(e) => setprofession(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-900 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              maxLength={20}
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={(e) => setdegree(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-900 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              maxLength={20}
            />
            <input
              type="number"
              name="passingYear"
              placeholder="Year of Passing"
              onChange={(e) => setpassingYear(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-900 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              maxLength={20}
            />
            {/* submit krne ke button hai  */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg font-bold transition duration-300 shadow-lg"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Signup as
            <Link
              to="/sign-up-teacher"
              className="text-blue-600 hover:underline font-semibold ml-1"
            >
              mentor
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-18">
        <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-gray-900 ">
          <h2 className="text-center text-3xl font-bold text-blue-200 mb-2">
            Setup skills (mentee)
          </h2>
          <p className="text-center bg-gray-900 text-blue-200 mb-6">
            Join us by filling out the form below
          </p>
          <div className="flex flex-wrap gap-4 ">
            <button
              className="btn btn-soft btn-accent "
              onClick={() => Make_arr(0)}
              id="skill_button0"
            >
              Html
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(1)}
              id="skill_button1"
            >
              Web development
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(2)}
              id="skill_button2"
            >
              Web3
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(3)}
              id="skill_button3"
            >
              Ml
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(4)}
              id="skill_button4"
            >
              DSA
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(5)}
              id="skill_button5"
            >
              GenAi
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(6)}
              id="skill_button6"
            >
              Python
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(7)}
              id="skill_button7"
            >
              C++
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(8)}
              id="skill_button8"
            >
              MERN
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(9)}
              id="skill_button9"
            >
              Web Scrapping{" "}
            </button>
            <button
              className="btn btn-soft btn-accent"
              onClick={() => Make_arr(10)}
              id="skill_button10"
            >
              Selenium
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
