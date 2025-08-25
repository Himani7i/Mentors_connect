import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export default function Chatbot() {
  const navigate = useNavigate();
  useEffect(() => {
    const check_cookie = async () => {
      const response = await axios.post(
        "http://localhost:5000/check-cookie",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data === true) {
      } else {
        alert("are you a imposter ? , cope up bro");
        navigate("/student-login");
      }
    };
    check_cookie();
  }, []);
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([
    { text: "Hello, I am Billo ! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const hadlereview = async () => {
    try {
      const response = await axios.get("http://localhost:5000/review", {
        withCredentials: true,
      });
      console.log(response.data);
      const response2 = await axios.post(
        "http://localhost:5000/chat-bot",
        {
          query: `You are a friendly mentor assisting a student. You’ll be given a JSON object with the following possible fields:
name, email, profession, degree, passingYear, skills_arr (an array of strings).

Please generate a supportive career review as follows:

1. **Greet the user by name**, if provided, e.g.:
   “Hello Harshit!”

2. **Summarize their academic profile**:
   “You’re pursuing a B.Tech and plan to graduate in 2027.”
   (Only include fields that exist in the JSON.)

3. **Check skills**:
   - If skills_arr is **missing, empty, or only contains empty/blank strings**, say:
     “It looks like you haven't listed any skills yet — no problem, this is the perfect time to start!”
   - Otherwise, list the valid skills (non-empty strings):
     “You’ve listed the following skills: Python, React.”

4. **Suggest next steps**:
   - Recommend **in-demand niche skills**, like **Machine Learning**, **Cloud Computing**, **Cybersecurity**, etc.
   - Suggest **what to learn next** to be internship-ready (e.g., frameworks, DevOps tools).
   - Provide a realistic stipend range (e.g., “with these skills and projects, internships may offer ₹10,000–₹25,000/month or equivalent”).
   - Share tips to **stand out**: project portfolio, hackathons, networking on LinkedIn/GitHub.

5. **Formatting instructions**:
   - **Bold** important and attention-worthy terms.
   - **Underline** key takeaways or action items.
   - Keep it concise, warm, and motivating. use this data as name {name}, email {email}, profession {profession}, degree {degree}, passingYear {passingYear}, skills_arr {skills_arr} 

   the format should be like this :
   Hello {name} !
    Your academic profile : you are pursuing {degree} and plan to graduate in {passingYear}.
    Your skills are : {skills_arr}
    Next steps : {suggestions}
your dynamic data is this : ${response.data}
}
`,
        },
        { withCredentials: true }
      );
      const result = response2.data;
      const botReply = { text: result, sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {}
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "http://localhost:5000/chat-bot",
        { query: input },
        { withCredentials: true }
      );

      const result = response.data;
      const botReply = { text: result, sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Try again later.", sender: "bot" },
      ]);
    }
  };
  return (
    <>
      <div className="ml-5 flex">
        <div className="w-90 h-fit mt-11 bg-gray-900 text-lg border-1 p-3 rounded-4xl">
          if your logged in as a student , click to get the review of your
          uploaded skills
          <div className="text-center">
            <button
              onClick={hadlereview}
              className="px-4 mt-3 py-2 bg-blue-600 text-white text-xl cursor-pointer rounded-lg hover:bg-blue-700 "
            >
              {" "}
              Click
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col w-250 h-250 ml-50 bg-gray-100 p-4 border-4 border-black rounded-3xl">
          <div className="flex-1 overflow-y-auto break-words">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`w-170 p-4 mb-4 rounded-xl text-lg leading-relaxed break-words shadow-md ${
                  msg.sender === "user"
                    ? "bg-pink-300 max-w-fit text-black text-xl ml-auto"
                    : "bg-gray-400 text-black text-xl mr-auto border border-blue-200"
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="flex items-center gap-2 p-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border-2 rounded-lg text-xl text-black"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-500 cursor-pointer text-white text-xl rounded-lg hover:bg-blue-600 "
            >
              {" "}
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
