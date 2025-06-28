import axios from "axios";
import React, { useEffect, useState } from "react";

const OAuth_return = () => {
  let token = "" ;
  let modifiedcode = "";
  useEffect(() => {
    const code = window.location.search;
    modifiedcode = code.split("=")[1];
    const data = async () => {
      const response = await axios.post(
        "http://localhost:1104/get-data_OAuth",
        { code: modifiedcode },
        {
          withCredentials: true,
        }
      );
      token = (response.data.access_token);
       newdata()
      
    };
    data();
  }, []);

  async function newdata() {
    const response2 = await axios.post(
      "http://localhost:1104/get-upcoming-events",
      { token },
      {
        withCredentials: true,
      }
    );
    console.log(response2.data);
  }

  return <div>hello</div>;
};

export default OAuth_return;
