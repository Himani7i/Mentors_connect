import axios from "axios";
import React, { useActionState, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OAuth_return = () => {
  const navigate = useNavigate();
  let modifiedcode = "";
  const [token, settoken] = useState("");
  const [newresponse, setnewresponse] = useState([]);
  const [ownerlink, setownerlink] = useState("");
  const [starttime, setstarttime] = useState([]);
  const [eventguest, seteventguest] = useState([]);
  const [location, setlocation] = useState([]);
  const [name, setname] = useState([]);

  useEffect(() => {
    const code = window.location.search;
    modifiedcode = code.split("=")[1];
    const data = async () => {
      const response = await axios.post(
        "https://mentors-connect-2.onrender.com/get-data_OAuth",
        { code: modifiedcode },
        {
          withCredentials: true,
        }
      );
      settoken(response.data.access_token);
      setownerlink(response.data.owner);
      
    };
    data();
  }, []);

  useEffect(() => {
    if (!token) return;
    const newdata = async () => {
      const response2 = await axios.post(
        "https://mentors-connect-2.onrender.com/get-upcoming-events",
        { token, ownerlink },
        {
          withCredentials: true,
        }
      );
      const events = response2.data;
      console.log(events) ;
      const startTimes = events.map((event) => event.start_time);
      const eventGuests = events.map(
        (event, index) => (
            (event.event_guests?.map((i) => (i.email))) || ["no email"]
        )
      );
      const locations = events.map((event) => event.location.join_url);
      const names = events.map((event) => event.name);
      const starttime = events.map((event) => event.start_time)
      setstarttime(startTimes);
      seteventguest(eventGuests);
      setlocation(locations);
      setname(names);
      setstarttime(starttime) ;
      /* if (response2.data.length > 0) {
        const all_uris = response2.data.map((i, index) => i.uri);
        const uri_id = all_uris.map((i) => i.split("/").reverse()[0]);
        const new_response = await axios.post(
          "https://mentors-connect-2.onrender.com/get-invitee-name",
          {
            uri_id,
            token,
          },
          {
            withCredentials: true,
          }
        );
        setnewresponse(new_response.data.flat());
      } */
    };

    newdata();
  }, [token]);

  useEffect(() => {
    if (
      name.length > 0 &&
      location.length > 0 &&
      eventguest.length > 0 &&
      starttime.length > 0
    ) {
      navigate("/teacher-dashboard", {
        state: {
          name: name,
          location: location,
          eventguest: eventguest,
          starttime: starttime,
        },
      });
    }
  }, [name, location, eventguest, starttime]);
  return <div className="m-auto">wait while we are fetching results</div>;
};

export default OAuth_return;