import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/image.jpg";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { InlineWidget } from "react-calendly";

const ProfileCard = ({
  username,
  email,
  image,
  profession,
  degree,
  passingYear,
  experience,
  experties,
}) => {
  const navigate = useNavigate();
  const [meeturl, setmeeturl] = useState(null);
  const handlebutton = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://mentors-connect-2.onrender.com/schedule-meet", {
      email,
    });
    setmeeturl(response.data);
    console.log(meeturl)
    /*  window.location.href = response.data; */

    navigate("/schedule-meets" , {
      state : {
        meeting_url : response.data
      }
    })
  };

  return (
    /* code upload krne ke liye  */
    <div className="p-5 h-full ml-4 mt-5 flex justify-center">
      <div className="bg-gray-800 rounded-lg border border-gray-300 w-80 border-b-2 ">
        <div className="bg-zinc-700 rounded-tl-lg rounded-tr-lg flex justify-center p-4 shadow-2xl">
          <img
            src={image}
            alt={username}
            className="w-40 h-40 rounded-full object-cover border-b-3  "
          />
        </div>

        <div className="lowersection bg-zinc-900 text-white p-3 rounded-b-lg">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold text-center mb-3 ">{username}</h1>
            <div className="badge badge-outline badge-success mt-1">
              {profession}
            </div>
          </div>
          <h1 className="text-gray-300">Email : {email}</h1>
          <h1 className="text-gray-300">Degree : {degree}</h1>
          <h1 className="text-gray-300">Passing Year : {passingYear}</h1>
          <h1 className="text-gray-300">Experience : {experience}</h1>
          <h1 className="text-gray-300">Experties : {experties}</h1>
          <div className="flex justify-center mt-4 ">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              onClick={handlebutton}
              className="dark:bg-black text-black dark:text-white flex items-center space-x-2 border-none  "
            >
              <span>Schedule meet</span>
            </HoverBorderGradient>
          </div>

          {/* meet crlo */}
        </div>
      </div>
    </div>  
  );
};

export default ProfileCard;
