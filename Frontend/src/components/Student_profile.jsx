import axios from "axios";
import { getDefaultValueType } from "motion/react";
import React, { useState } from "react";
import { useEffect } from "react";

const Student_profile = () => {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://mentors-connect-2.onrender.com/get-skills", {
        withCredentials: true,
      });
      setSkills(response.data.skills_arr);
      setEmail(response.data.email);
      setProfession(response.data.profession);
      setName(response.data.name);
      setDegree(response.data.degree);
      console.log(response.data.name);
      console.log(response.data.degree);
      console.log(response.data.skills_arr);
    };
    getData();
    console.log(skills);
  }, []);

  return (
    <div className="flex justify-center h-screen w-screen items-center bg-[#271F3F]">
      <div className="p-5 ml-4 mt-5 flex justify-center ">
        <div className="bg-white rounded-lg border border-gray-300 w-80">
          <div className=" rounded-tl-lg rounded-tr-lg flex justify-center p-4 bg-zinc-700">
            <img
              className="w-40 h-40 rounded-full object-cover border-b-3 border-white "
              src="https://media.tenor.com/xRF_8aickxwAAAAM/silly-cat-silly-car.gif"
            />
          </div>

          <div className="lowersection bg-gray-900 text-white p-3 rounded-b-lg ">
            <h1 className="text-gray-300 text-center text-3xl mb-2 font-sans ">
              {name}
            </h1>
            <h1 className="text-gray-300 text-md mb-[1.5px]">
              Email : {email}
            </h1>
            <h1 className="text-gray-300 text-md mb-[1.5px]">
              Profession : {profession}{" "}
            </h1>
            <h1 className="text-gray-300 text-md mb-2">Degree : {degree} </h1>
            <div className="flex justify-center mt-2 mb-3"></div>

            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className="badge badge-outline badge-accent "
                    >
                      {i}
                    </div>
                  );
                })
              ) : (
                <div>No skills data found</div>
              )}
            </div>
            {/* meet crlo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_profile;
