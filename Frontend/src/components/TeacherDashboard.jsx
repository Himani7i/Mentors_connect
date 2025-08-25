import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const TeacherDashboard = ({ username }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [session, setsession] = useState("");
  const [totalstudents, settotalstudents] = useState("");
  const [sessioninfo, setsessioninfo] = useState([]);
  const [uri, seturi] = useState([]);
  const [inviteename, setinviteename] = useState([]);
  const [guestname, setguestname] = useState([]);
  let date_in_ist = 0;
  const [invitee, setinvitee] = useState("");
  const [data, setdata] = useState([]);
  const count = 0;

  const location = useLocation();

  const handleclick = () => {
    navigate("/");
  };

  useEffect(() => {
    const datas = location.state || null;
    if (datas) {
      setdata(datas);
      console.log(datas);
    } else {
      const client_id = import.meta.env.VITE_CLIENT_ID;
      const redirectUri = "http://localhost:5173/auth/callback";
      const responseType = "code";
      //const oauthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
      window.location.href =
        `https://auth.calendly.com/oauth/authorize` +
        `?client_id=${client_id}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_type=${responseType}`;
    }
  }, [location.state]);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:5000/get-info", {
        withCredentials: true,
      });
      setname(response.data.name);
      setemail(response.data.email);
      setimage(response.data.image_link);
      setsession(response.data.total_sessions);
      settotalstudents(response.data.total_students);
    };
    data();
  }, []);

  return (
    <>
      <div className="flex bg-gray-100 ">
        <div className="w-23 lg:w-64 bg-blue-900 text-white">
          <div className=" mt-5 flex items-center justify-center lg:justify-start">
            <h1 className="hidden lg:block text-3xl font-bold">
              Mentor's Connect
            </h1>
            <div className="">
              <button
                className="bg-red-700 text-white h-10 p-2 rounded-xl cursor-pointer m-5 hover:bg-red-800 "
                onClick={handleclick}
              >
                Home
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <header className="bg-white shadow-sm">
            <div className="flex justify-between items-center px-4 py-3">
              <div>
                <h2 className="text-3xl font-semibold text-black">
                  Teacher Dashboard
                </h2>
                <p className="text-lg text-gray-600">
                  Welcome,{" "}
                  <span className="font-medium text-black">{name}</span>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <img
                  src={image}
                  alt="Profile"
                  className="w-22 h-22 rounded-full object-cover border-2 border-black shadow-md"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-gray-900">{name}</p>
                  <p className="text-lg text-gray-600">{email}</p>
                </div>
              </div>
            </div>
          </header>
          <div className="text-black text-xl flex gap-6 bg-white rounded-xl shadow-md p-8 justify-evenly border-t-2 border-gray-300">
            <div className="pr-6 border-r-2 border-gray-300 font-semibold text-gray-700 ">
              👥 Total Students Registered = {totalstudents}
            </div>
            <div className="pr-6 border-r-2 border-gray-300 font-semibold text-gray-700">
              ⭐ Total Ratings = 4.5/5
            </div>
            <div className="pr-6 font-semibold text-gray-700">
              📅 Upcoming Meetings = {data.name?.length || 0}
            </div>
          </div>

          <div className="text-white h-screen p-6 overflow-auto">
            <div className="max-w-4xl mx-auto space-y-6">
              {data.location?.map((_, index) => (
                <div
                  className="bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-700 space-y-4 hover:border-blue-500 transition duration-300"
                  key={index}
                >
                  <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                    <h2 className="text-lg font-semibold text-blue-400 mb-1">
                      📌 Event Name
                    </h2>
                    <p className="text-gray-300">{data.name?.[index]}</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                    <h2 className="text-lg font-semibold text-green-400 mb-1">
                      🔗 Location
                    </h2>
                    <p className="text-gray-300">{data.location?.[index]}</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                    <h2 className="text-lg font-semibold text-pink-400 mb-1">
                      👤 Guest
                    </h2>
                    <p className="text-gray-300">
                      {data.eventguest?.[index]?.map((i, idx) => i)}
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                    <h2 className="text-lg font-semibold text-yellow-400 mb-1">
                      🕒 Start Time
                    </h2>
                    <p className="text-gray-300">
                      {new Date(data.starttime?.[index]).toLocaleTimeString(
                        "en-IN",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        }
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-2">
        <span>{icon}</span>
        <h3 className="ml-2 font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};
export default TeacherDashboard;
