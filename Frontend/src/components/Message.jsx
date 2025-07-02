import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
const socket = io("https://mentors-connect-2.onrender.com");

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const [isOn, setIsOn] = useState(false);

  const roomId = "mern-stack";

  useEffect(() => {
    socket.emit("joinroom", roomId);
  }, []);

  const bottomRef = useRef(null);

  useEffect(() => {
    const check_cookie = async () => {
      const response = await axios.post(
        "https://mentors-connect-2.onrender.com/check-cookie",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data === true) {
        fetchmessage();
      } else {
        navigate("/student-login");
      }
    };
    const fetchmessage = async () => {
      const response = await axios.get("https://mentors-connect-2.onrender.com/get-messages", {
        withCredentials: true,
      });

      setMessages(response.data);
    };
    check_cookie();
  }, []);

  useEffect(() => {
    const response = async () => {
      const userinfo = await axios.post(
        "https://mentors-connect-2.onrender.com/info-for-message",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(userinfo.data);
    };

    socket.on("newmessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    response();
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;
    socket.emit("message", { roomId: roomId, text: input, sender: user });
    setInput("");
  };

  const handle_toggle = () => {
    setIsOn((prev) => !prev);
    console.log(isOn);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={`flex flex-col max-w-3xl mx-auto h-screen px-6 py-4 ${
        isOn ? "bg-[#0d0d0d]" : "bg-gray-800  "
      } text-white rounded-xl shadow-xl font-sans`}
    >
      <div className="flex justify-between ">
        <h2 className="text-4xl font-bold mb-6 text-center text-cyan-400 tracking-widest ml-50">
          ⚡ MernStack
        </h2>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onClick={handle_toggle}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>

      <div
        className={`flex-1 overflow-y-auto space-y-4 p-5 ${
          isOn ? "bg-[#111111]" : "bg-blue-200"
        } rounded-2xl border border-[#1a1a1a] shadow-inner backdrop-blur-md scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent`}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-xl hover:scale-[1.01] transition-transform duration-150 shadow-md max-w-fit"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold uppercase shadow-lg">
              {msg.sender?.[0] || "?"}
            </div>
            <div className="flex flex-col">
              <span className="text-cyan-300 font-semibold text-sm tracking-wide">
                {msg.sender}
              </span>
              <p className="text-white mt-1 text-base overflow-wrap">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-3 mt-5">
        <input
          type="text"
          className={`flex-1 ${
            isOn ? "bg-[#1a1a1a]" : "bg-white"
          } border border-[#333] ${
            isOn ? "text-white" : "text-black"
          } placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200`}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-br from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-600/40 transition-all duration-200"
        >
          💬 Send
        </button>
      </div>
    </div>
  );
};

export default Message;
