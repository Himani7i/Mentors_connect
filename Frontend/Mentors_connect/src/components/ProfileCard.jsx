import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/image.jpg";

const ProfileCard = ({
  username,
  email,
  profession,
  degree,
  passingyear,
  experience,
  experties,
}) => {
  const navigate = useNavigate();
  const [meeturl, setmeeturl] = useState(null);
  const handlebutton = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:1104/schedule-meet", {
      email,
    });
    console.log(response.data);
    setmeeturl(response.data.meeturl);
    console.log(meeturl);
    window.location.href = response.data;
  };

  return (
    /* code upload krne ke liye  */
    <div className="p-5 h-full ml-4 mt-5 flex justify-center">
      <div className="bg-white rounded-lg border border-gray-300 w-80">
        <div className="bg-red-400 flex justify-center p-4">
          <img
            src={image}
            alt={username}
            className="w-35 h-35 rounded-full object-cover border-2 border-white "
          />
        </div>

        <div className="lowersection bg-zinc-800 text-white p-3 rounded-b-lg">
          <h1 className="text-lg font-bold">name : {username}</h1>
          <h1 className="text-gray-300">email : {email}</h1>
          <h1 className="text-gray-300">Profession : {profession}</h1>
          <h1 className="text-gray-300">Degree : {degree}</h1>
          <h1 className="text-gray-300">passing year: {passingyear}</h1>
          <h1 className="text-gray-300">experience : {experience}</h1>
          <h1 className="text-gray-300">experties : {experties}</h1>
          <button
            onClick={handlebutton}
            className="bg-blue-600 p-2 ml-20 mt-5 rounded-full "
          >
            Schedule meet
          </button>
          {/* meet crlo */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
