import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import exec from "child_process";
import { type } from "os";

dotenv.config();
const port = process.env.port;

const app = express();
const jwtpassword = "Titan1234";

// middlewares
{
  app.use(express.json());
  app.use(cors());
}

// connection of mongoose
mongoose.connect(
  "mongodb+srv://harshityadavmits:btoZL6OFVnxzz4SJ@cluster0.npmr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("hello");
});

// student
{
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
  });
  app.post("/sign-up-student", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const profession = req.body.profession;
    const degree = req.body.degree;
    const passingYear = req.body.passingYear;

    const newMember = new Students({
      name,
      email,
      password,
      profession,
      degree,
      passingYear,
    });

    await newMember.save();
    res.send("done");
  });
  // login route (student)
  async function check_account_student(email, password) {
    const user = await Students.findOne({ email: email });
    if (!user) {
      return false;
    }
    if (user) {
      const ans = user.password === password;
      if (ans) {
        return true;
      } else {
        return false;
      }
    }
  }
  app.post("/student-login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const isAuthenticated = await check_account_student(email, password);
    if (isAuthenticated) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
}

// teacher

// signup as teacher

const Teachers = mongoose.model("Teachers", {
  name: {
    type: String,
  },
  image :{
    type : String ,
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
  const image = req.body.image ;
  const email = req.body.email;
  const password = req.body.password;
  const profession = req.body.profession;
  const degree = req.body.degree;
  const passingYear = req.body.passingYear;
  const experience = req.body.experience;
  const experties = req.body.experties;

  const newMember = new Teachers({
    name,
    image ,
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
{
  async function check_account_teacher(email, password) {
    const user = await Teachers.findOne({ email: email });
    if (user) {
      const ans = user.password === password;
      if (ans) {
        return true;
      } else {
        return false;
      }
    }
  }
  app.post("/teacher-login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const isAuthenticated = await check_account_teacher(email, password);
    if (!isAuthenticated) {
      res.send("true");
    } else {
      res.send("false");
    }
  });
}
  
// chatbot
{
  // yaha pr ai aa raha hai

  const myAi = new GoogleGenerativeAI(
    "AIzaSyB_rnCww1bvBXTVNRNK87tIJlrYAylykW0"
  );

  async function generateResponse(query) {
    const prompt = query;
    const model = myAi.getGenerativeModel({ model: "gemini-1.5-flash" }   
      
      );
    const result = await model.generateContent(prompt);
    return result;
  }
  app.post("/chat-bot", async (req, res) => {
    const query = req.body.query;
    const result = await generateResponse(query);
    res.send(result.response.text());
  });
}

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

// schedule meet
app.post("/schedule-meet" , (req,res)=>{
  const email = req.body.email 
  const meeturl = email.substring(0, email.indexOf("@"));
  res.send(`https://calendly.com/${meeturl}`)
})

import multer from "multer" 


const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
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


app.listen(port, () => {
  console.log(`hello , server is up at ${port}`);
});
