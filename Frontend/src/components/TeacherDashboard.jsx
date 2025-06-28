import axios from "axios";
import React, { useEffect, useState } from "react";

const TeacherDashboard = ({ username }) => {
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

  useEffect(() => {
    const client_id = "SB89ab0H8j1KN6SyrR7dY8C2yBOdvILuLvPbFoDrd_k";
    const redirectUri = "http://localhost:5173/auth/callback"; 
    const responseType = "code";
    //const oauthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = `https://auth.calendly.com/oauth/authorize?client_id=${client_id}&response_type=${responseType}&redirect_uri=${redirectUri}`;
  }, []);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:1104/get-info", {
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

  /* useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "http://localhost:1104/get-upcoming-events"
      );
      setsessioninfo(response.data);
      const itreatable = response.data;
      const all_uris = itreatable.map((i) => i.uri);
      setguestname(itreatable.map((i) => i.event_guests));
      seturi(all_uris);
    };

    data();
  }, []); */

  useEffect(() => {
    const data = async () => {
      const response = await axios.post(
        "http://localhost:1104/get-invitee-name",
        {
          uris: uri,
        }
      );
      setinviteename(
        response.data.flat().map((i) => {
          return i.name;
        })
      );
    };

    data();
  }, [uri]);

  const stats = {
    totalSessions: session,
    totalStudents: totalstudents,
    avgRating: 4.8,
    hoursThisMonth: 42,
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-black">
            <StatCard
              icon="📹"
              title="Total Sessions"
              value={stats.totalSessions}
            />
            <StatCard
              icon="👥"
              title="Total Students"
              value={stats.totalStudents}
            />
            <StatCard
              icon="🏆"
              title="Average Rating"
              value={stats.avgRating}
            />
            <StatCard
              icon="⏳"
              title="Hours This Month"
              value={stats.hoursThisMonth}
            />
          </div>
        );
      case "calendar":
        return (
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium text-lg mb-4">
              Calendar & Availability
            </h3>
            <div className="text-center p-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">
                Calendar integration would be implemented here
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Sync with Calendly, Google Calendar, etc.
              </p>
            </div>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    /* code upload krne ke liye  */
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-16 lg:w-64 bg-blue-900 text-white">
        <div className="p-4 flex items-center justify-center lg:justify-start">
          <h1 className="hidden lg:block text-xl font-bold">Mentor Connect</h1>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-4 py-3">
            <div>
              <h2 className="text-2xl font-semibold text-black">
                Teacher Dashboard
              </h2>
              <p className="text-sm text-gray-600">
                Welcome, <span className="font-medium text-black">{name}</span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src={image}
                alt="Profile"
                className="w-15 h-15 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="flex flex-col">
                <p className="text-base font-semibold text-gray-900 ">{name}</p>
                <p className="text-sm  text-gray-600">{email}</p>
              </div>
            </div>
          </div>
        </header>

        <div>
          <div className="bg-[#0f172a] flex  p-6 text-white ">
            {sessioninfo.length > 0 ? (
              sessioninfo.map((i, index) => (
                <div
                  key={index}
                  className="bg-[#1e293b] rounded-xl p-5 shadow-lg border border-gray-600 max-w-xl mx-auto space-y-3"
                >
                  <div className="text-xl font-bold text-white">
                    📌 Event Type:{" "}
                    <span className="text-blue-400">{i.name}</span>
                  </div>

                  <div className="">
                    <span className="text-md font-bold text-white">
                      Name of the student :
                    </span>{" "}
                    <span className="text-white">
                      {inviteename[index] ? inviteename[index] : " no name "}
                    </span>
                  </div>

                  <div className="">
                    Guests :{" "}
                    {guestname[index].length > 0
                      ? guestname[index][0].email
                      : " No guests"}{" "}
                  </div>

                  <div className="text-sm text-gray-300">
                    {(() => {
                      const date = new Date(i.created_at);
                      const date_in_ist = date.toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        hour12: true,
                      });
                      return `🕓 Schedule created at: ${date_in_ist}`;
                    })()}
                  </div>

                  <div className="text-sm text-gray-300">
                    {(() => {
                      const date = new Date(
                        i.event_memberships[0].buffered_start_time
                      );
                      const date_in_ist = date.toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        hour12: true,
                      });
                      return `📅 Meeting Date: ${date_in_ist}`;
                    })()}
                  </div>

                  <div className="text-sm text-gray-300">
                    {(() => {
                      const date = new Date(
                        i.event_memberships[0].buffered_start_time
                      );
                      const date_in_ist = date.toLocaleTimeString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        hour12: true,
                      });
                      return `🕘 Start Time: ${date_in_ist}`;
                    })()}
                  </div>

                  <div className="text-sm text-gray-300">
                    {(() => {
                      const date = new Date(
                        i.event_memberships[0].buffered_end_time
                      );
                      const date_in_ist = date.toLocaleTimeString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        hour12: true,
                      });
                      return `🕙 End Time: ${date_in_ist}`;
                    })()}
                  </div>

                  <div className="text-sm text-gray-300">
                    💬 Question:{" "}
                    <span className="text-white font-medium">
                      {i.questions_and_answers?.[0]?.answer ||
                        "No answer available"}
                    </span>
                  </div>

                  <div className="pt-2">
                    {i.location?.join_url ? (
                      <a
                        href={i.location.join_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm transition"
                      >
                        🔗 Join Meeting
                      </a>
                    ) : (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm transition"
                      >
                        No meeting link available
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 text-lg">
                No session data found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
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
