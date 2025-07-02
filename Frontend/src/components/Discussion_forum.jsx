import React, { useState } from "react";
import { BrowserRouter, href, Route, useNavigate } from "react-router-dom";
import axios from "axios";

const Discussion_forum = () => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const handle_click = async () => {
    const response = await axios.post(
      "https://mentors-connect-2.onrender.com/validation-for-forum",
      {
        query,
      },
      {
        withCredentials: true,
      }
    );
    const ans = response.data;
    if (ans) {
      navigate(`/messages-${query}`);
    } else {
      alert("Error! Task failed successfully .");
      navigate("/student-login")
    }
    console.log(response.data);
  };

  return (
    <div className=" ">
      <div className="bg-gray-800 h-screen w-screen flex pt-50 m-auto justify-center gap-5 ">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-2xl">
            Which room you want to join ?
          </legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            onChange={(e) => setquery(e.target.value.toLowerCase())}
          />
          <p className="label text-md">Please enter a valid roomId</p>
        </fieldset>
        <button className="btn mt-12" onClick={handle_click}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Discussion_forum;
