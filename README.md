# Mentors Connect

Mentors Connect is a web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) that allows users to book mentorship sessions using the **Calendly API** and integrate AI-powered assistance via **Gemini API**.

---

## 🚀 Features
- **Mentor Scheduling**: Users can book mentorship sessions via the **Calendly API**.
- **AI Assistance**: Uses the **Gemini API** for AI-powered guidance and responses.
- **User Authentication**: Secure login and authentication using **JWT & Bcrypt**.
- **Dynamic Dashboard**: View upcoming sessions, past sessions, and AI chat history.

---

## 🛠 Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **APIs**: Calendly API, Gemini API

---

## 📌 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/mentors-connect.git
cd mentors-connect
```

### 2️⃣ Setup Backend (Node.js + Express)
```sh
cd backend
npm install
```

#### Configure `.env` file in `backend/`
```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
CALENDLY_API_KEY=your-calendly-api-key
GEMINI_API_KEY=your-gemini-api-key
```

#### Run the Backend Server
```sh
npm start
```

### 3️⃣ Setup Frontend (React.js)
```sh
cd ../frontend
npm install
```

#### Configure `.env` file in `frontend/`
```env
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_GEMINI_API_KEY=your-gemini-api-key
REACT_APP_CALENDLY_API_KEY=your-calendly-api-key
```

#### Run the Frontend Server
```sh
npm start
```

---

## 🔗 API Integration
### **Calendly API** (Scheduling Meetings)
- Used for booking mentorship sessions.
- API Call Example:
```js
fetch('https://api.calendly.com/scheduled_events', {
  headers: { Authorization: `Bearer ${process.env.CALENDLY_API_KEY}` }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### **Gemini API** (AI-Powered Chat)
- Integrated for AI-based guidance.
- API Call Example:
```js
fetch('https://api.gemini.com/v1/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GEMINI_API_KEY}`
  },
  body: JSON.stringify({ message: 'How can I improve my coding skills?' })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 🚀 Deployment
### **Frontend (Vercel)**
```sh
vercel
```

### **Backend (Render/Railway)**
- Push backend code to GitHub.
- Deploy on **Render** or **Railway**.
- Set **environment variables** on the hosting platform.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📄 License
This project is open-source and available under the **MIT License**.

---

## 📞 Contact
For any issues or suggestions, feel free to reach out!

📧 Email: harshityadav.mits@gmail.com, himani.07.ch@gmail.com  
💻 GitHub: (https://github.com/harshitneversettle),(https://github.com/Himani7i)

images
![image]![image](https://github.com/user-attachments/assets/b48faadd-e97a-4939-940a-4b6794e3ecdc)
![image](https://github.com/user-attachments/assets/bf75dfeb-dd62-4fa1-bfce-f2b5c9aef3f1)
![image]![image](https://github.com/user-attachments/assets/8c428965-f9a8-4dee-8c3f-791418618f3f)
![image](https://github.com/user-attachments/assets/b65b6443-9846-414a-a51a-75545afa3301)
![image](https://github.com/user-attachments/assets/96238be7-14da-4443-ab7a-8615102a890a)



