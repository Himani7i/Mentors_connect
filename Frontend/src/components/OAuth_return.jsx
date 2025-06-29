import axios from "axios";
import React, { useEffect, useState } from "react";

const OAuth_return = () => {
  let modifiedcode = "";
  const [uri, seturi] = useState([]);
  const [info, setinfo] = useState("");
  const [token, settoken] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [session, setsession] = useState("");
  const [totalstudents, settotalstudents] = useState("");

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
        console.log(uri_id);
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
        console.log(new_response.data.flat());
      }
    };
    newdata();
  }, [token]);

  return <div>hello</div>;
};

export default OAuth_return;
