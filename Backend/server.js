import express from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import exec from "child_process";
import { type } from "os";
import jwt from "jsonwebtoken";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import axios from "axios";
dotenv.config();

const port = process.env.port || 3000;

const app = express();
const jwtpassword = "Titan1234";
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// middlewares

app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true,
  })
);

// connection of mongoose
mongoose.connect(
  "mongodb+srv://harshityadavmits:btoZL6OFVnxzz4SJ@cluster0.npmr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("hello");
});

// student

// signup as student
const Students = mongoose.model("Students", {
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  profession: {
    type: String,
  },
  degree: {
    type: String,
  },
  passingYear: Number,
  skills_arr: {
    type: Array,
  },
});
app.post("/sign-up-student", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const profession = req.body.profession;
  const degree = req.body.degree;
  const passingYear = req.body.passingYear;
  const skills_arr = req.body.skills_arr;

  const newMember = new Students({
    name,
    email,
    password,
    profession,
    degree,
    passingYear,
    skills_arr,
  });

  await newMember.save();
  res.send("done");
});
// login route (student)
async function check_account_student(email, password) {
  const user = await Students.findOne({ email });
  if (user) {
    if (user && user.password == password) {
      return true;
    }
    return false;
  } else {
    return false;
  }
}
app.post("/student-login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isAuthenticated = await check_account_student(email, password);
  if (isAuthenticated) {
    const email_token = jwt.sign({ email }, jwtpassword);
    res.cookie("user_token", email_token, {
      maxAge: 1450 * 60 * 1000,
    });
    res.send(true);
  } else {
    res.send(false);
  }
});

// teacher

// signup as teacher

const Teachers = mongoose.model("Teachers", {
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  profession: {
    type: String,
  },
  degree: {
    type: String,
  },
  passingYear: Number,
  experience: {
    type: String,
  },
  experties: {
    type: String,
  },
});
app.post("/sign-up-teacher", async (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const email = req.body.email;
  const password = req.body.password;
  const profession = req.body.profession;
  const degree = req.body.degree;
  const passingYear = req.body.passingYear;
  const experience = req.body.experience;
  const experties = req.body.experties;

  const newMember = new Teachers({
    name,
    image,
    email,
    password,
    profession,
    degree,
    passingYear,
    experience,
    experties,
  });

  await newMember.save();
  res.send("done");
});

// login route (teacher)

async function check_account_teacher(email, password) {
  const user = await Teachers.findOne({ email: email });
  if (user && user.password === password) {
    return true;
  }
  return false;
}
app.post("/teacher-login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const isAuthenticated = await check_account_teacher(email, password);
  if (isAuthenticated) {
    const email_token = jwt.sign(email, jwtpassword);
    res.cookie("teacher_token", email_token, {
      maxAge: 1450 * 1000 * 60,
    });
    res.send(true);
  } else {
    res.send(false);
  }
});

// chatbot

// yaha pr ai aa raha hai

const myAi = new GoogleGenerativeAI("AIzaSyB_rnCww1bvBXTVNRNK87tIJlrYAylykW0");

async function generateResponse(query) {
  const prompt = query;
  const model = myAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return result;
}
app.post("/chat-bot", async (req, res) => {
  const query = req.body.query;
  let all_query = "";
  all_query += query + "\n";
  const result = await generateResponse(all_query);
  res.send(result.response.text());
});

// predict placement
/* {
  app.post("/predict", (req, res) => {
    const { cgpa, skills, internship } = req.body;
    const skillsString = skills.join(",");

    exec(
      `python3 predict.py ${cgpa} "${skillsString}" ${internship}`,
      (error, stdout) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return res.status(500).json({ error: "Prediction failed" });
        }

        const result = JSON.parse(stdout.trim());
        res.json(result);
      }
    );
  });
} */

// mentor search
app.get("/mentors", async (req, res) => {
  const mentorsList = await Teachers.find();
  res.json(mentorsList);
});

app.get("/get-skills", async (req, res) => {
  const token = req.cookies.user_token;
  const decoded_token = jwt.decode(token);
  const decoded_email = decoded_token.email;
  const user = await Students.findOne({ email: decoded_email });
  console.log(user);
  res.send(user);
});
// schedule meet
app.post("/schedule-meet", (req, res) => {
  const email = req.body.email;
  const meeturl = email.substring(0, email.indexOf("@"));
  res.send(`https://calendly.com/harshityadav-mits/`);
});

import multer from "multer";
import { Socket } from "dgram";

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDFs are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

app.post("/upload", upload.single("pdf"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please upload a PDF file!" });
  }
  res.json({ message: "File uploaded successfully!", file: req.file });
});

const MernMessage = mongoose.model("MernMessage", {
  roomid: String,
  sender: String,
  text: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

io.on("connection", (socket) => {
  socket.on("joinroom", (roomId) => {
    socket.join(roomId);
  });

  socket.on(
    "message",
    async ({ roomId: roomId, text: message, sender: user }) => {
      const newMessage = new MernMessage({
        roomId: roomId,
        text: message,
        sender: user,
      });
      newMessage.save();
      io.to(roomId).emit("newmessage", {
        roomId: roomId,
        text: message,
        sender: user,
      });
    }
  );

  socket.on("disconnect", () => {
    console.log(" Client disconnected:", socket.id);
  });
});

app.get("/get-messages", async (req, res) => {
  const messages = await MernMessage.find();
  res.send(messages);
});

app.post("/info-for-message", async (req, res) => {
  const email_token = req.cookies.user_token;
  const decoded_email = jwt.decode(email_token).email;
  const username = await Students.findOne({ email: decoded_email });
  if (decoded_email) {
    const name = username.name.split(" ");
    res.send(name[0]);
  }
});

app.post("/validation-for-forum", async (req, res) => {
  const token = req.cookies.user_token;
  const query = req.body.query;

  const decoded_token = jwt.decode(token);

  const decoded_email = decoded_token.email;

  const user = await Students.findOne({ email: decoded_email });
  if (user && query.trim() != "") {
    res.send(true);
  } else {
    res.send(false);
  }
});

server.listen(port, () => {
  console.log(`server connected successfully on ${port}`);
});

// teachers dashboard
app.get("/get-info", async (req, res) => {
  const token = req.cookies.teacher_token;
  const decoded_email = jwt.decode(token);
  const user = await Teachers.findOne({ email: decoded_email });
  const Students_in_db = (await Students.find()).length;
  const information = {
    total_students: 0,
    name: "",
    email: "",
    total_sessions: 8,
    image_link: "",
  };
  information.total_students = Students_in_db;
  information.name = user.name;
  information.image_link = user.image;
  information.email = user.email;
  res.send(information);
});

const CALENDLY_API_KEY = process.env.CALANDELY_API;

app.get("/get-upcoming-events", async (req, res) => {
  const response = await axios.get(
    "https://api.calendly.com/scheduled_events",
    {
      headers: {
        Authorization: `Bearer ${CALENDLY_API_KEY}`,
      },
      params: {
        user: "https://api.calendly.com/users/6a97ceaf-5953-48ef-bcde-e2609cfecb68",
        sort: "start_time:asc",
        status: "active",
      },
    }
  );
  const events = response.data.collection;
  res.send(events);
});

app.post("/get-invitee-name", async (req, res) => { 
  const all_uri = req.body.uris;      
  const inviteeNames = await Promise.all(
    all_uri.map(async (i) => {
      const splitting = i.split("/").reverse()[0];
      const response = await axios.get(  
        `https://api.calendly.com/scheduled_events/${splitting}/invitees`,
        {
          headers: {
            Authorization: `Bearer ${CALENDLY_API_KEY}`,
          },
        }
      );
      return (response.data.collection);
    })
  );
  res.send(inviteeNames)
});

/* app.listen(port, () => {
  console.log(`hello , server is up at ${port}`);
});
 */
