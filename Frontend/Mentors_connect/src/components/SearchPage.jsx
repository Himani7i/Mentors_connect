import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";

const SearchPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get("http://localhost:1104/mentors");
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };
    getList();
  }, []);

  return (
    /* code upload krne ke liye  */
    <div>
      <div className="flex justify-between h-20 items-center bg-pink-200 px-6">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Peralta, sans-serif" }}
        >
          List of Mentors
        </h1>
      </div>

      <div className=" flex flex-wrap">
        {mentors.length > 0 ? (
          mentors.map((i) => (
            <ProfileCard
              key={i.email}
              image={i.image}
              username={i.name}
              email={i.email}
              profession={i.profession}
              degree={i.degree}
              passingyear={i.passingyear}
              experience={i.experience}
              experties={i.experties}
            />
          ))
        ) : (
          <h1 className="text-center text-gray-600 mt-5">
            No mentors available
          </h1>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
