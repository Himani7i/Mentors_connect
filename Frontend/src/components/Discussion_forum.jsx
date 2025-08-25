import React, { useState } from "react";
import { BrowserRouter, href, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Discussion_forum = () => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const handle_click = async () => {
    const response = await axios.post(
      "http://localhost:5000/validation-for-forum",
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
      navigate("/student-login");
    }
    console.log(response.data);
  };
  // useEffect(() => {
  //   alert("Only available forum is 'Mernstack' ");
  // }, []);

  return (
    <div className=" justify-center items-center pt-50 h-screen bg-gray-800">
      <div className="bg-gray-800 h-100 w-200 flex m-auto justify-center border-2 rounded-4xl">
        <fieldset className="fieldset items-center m-auto ">
          <legend className="fieldset-legend text-4xl">
            Which room you want to join ?
          </legend>
          <div className=" flex gap-5 mt-5 justify-center">
            <input
              type="text"
              className="input text-xl"
              placeholder="Type here"
              onChange={(e) => setquery(e.target.value.toLowerCase())}
            />
            <button className="btn " onClick={handle_click}>
              Join
            </button>
          </div>
          <p className="label text-lg mt-2 ml-11">
            Please enter a valid roomId
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Discussion_forum;
