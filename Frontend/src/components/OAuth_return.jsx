import axios from "axios";
import React, { useActionState, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OAuth_return = () => {
  const navigate = useNavigate();
  let modifiedcode = "";
  const [token, settoken] = useState("");
  const [newresponse, setnewresponse] = useState([]);
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
      settoken(response.data.access_token);
    };
    data();
  }, []);

  useEffect(() => {
    if (!token) return;
    const newdata = async () => {
      const response2 = await axios.post(
        "http://localhost:1104/get-upcoming-events",
        { token },
        {
          withCredentials: true,
        }
      );
      if (response2.data.length > 0) {
        const all_uris = response2.data.map((i, index) => {
          return i.uri;
        });
        const uri_id = all_uris.map((i) => i.split("/").reverse()[0]);
        const new_response = await axios.post(
          "http://localhost:1104/get-invitee-name",
          {
            uri_id,
            token,
          },
          {
            withCredentials: true,
          }
        );
        setnewresponse(new_response.data.flat());
      }
    };
    newdata();
  }, [token]);

  useEffect(() => {
    if (newresponse.length > 0) {
      navigate("/teacher-dashboard", {
        state: {
          response: newresponse,
        },
      });
    }
  }, [newresponse, navigate]);
  return <div>hello</div>;
};

export default OAuth_return;
