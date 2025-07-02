import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chatbot from "./components/Chatbot";
import MainPge from "./components/MainPge";
import TeacherLogin from "./components/TeacherLogin";
import StudentLogin from "./components/StudentLogin";
import Signup_student from "./components/Signup_student";
import Signup_teacher from "./components/Signup_teacher";
import Calendly from "./components/Calendly";
import SearchPage from "./components/SearchPage";
import PdfUpload from "./components/PdfUpload";
import TeacherDashboard from "./components/TeacherDashboard";
import Student_profile from "./components/Student_profile";
import How_it_works from "./components/How_it_works";
import Message from "./components/Message";
import Discussion_forum from "./components/Discussion_forum";
import Schedule_meet from "./components/Schedule_meet";
import OAuth_return from "./components/OAuth_return";

function App() {
  return (
    /* code upload krne ke liye  */
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPge />} />
          <Route path="/sign-up-student" element={<Signup_student />} />
          <Route path="/sign-up-teacher" element={<Signup_teacher />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat-bot" element={<Chatbot />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/schedule-meet" element={<Calendly />} />
          <Route path="/mentors" element={<SearchPage />} />
          <Route path="/upload" element={<PdfUpload />} />
          <Route path="/mentee-profile" element={<Student_profile/>} />
          <Route path="/working" element={<How_it_works/>} />
          <Route path = "/messages-Mernstack" element=<Message /> />
          <Route path = "/discussion-forum" element=<Discussion_forum /> />
          <Route path = "/schedule-meets" element=<Schedule_meet/> />
          <Route path = "/auth/callback" element=<OAuth_return/> />
          <Route path = "/workings" element=<How_it_works /> />
          <Route path="/teacher-dashboard" element={<TeacherDashboard username={"Rahul"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
