# 🤖 InterviewIQ.AI — AI-Powered Mock Interview Platform

InterviewIQ.AI is a **full-stack AI-powered mock interview platform** designed to help users practice realistic interviews and improve their technical and communication skills.

The platform generates **personalized interview questions** based on the user's role, experience, skills, and resume. It also evaluates interview performance and provides detailed feedback through AI-powered analysis.

---

## ✨ Features

* 🤖 **AI-Powered Interviews** — Generate personalized interview questions using AI.
* 📄 **Resume Analysis** — Upload a PDF resume and automatically extract role, experience, projects, and skills.
* 🎯 **Role-Based Questions** — Questions are generated according to the selected job role and experience.
* 💻 **Technical & HR Interviews** — Choose between Technical and HR interview modes.
* 🎙️ **Voice-Enabled Interviews** — Answer questions using voice input through the Web Speech API.
* ⏱️ **Timed Interviews** — Each question has a time limit to simulate real interview conditions.
* 📊 **Performance Analytics** — Get scores for overall performance, confidence, communication, and correctness.
* 📝 **AI Feedback** — Receive AI-generated feedback on individual answers.
* 📚 **Interview History** — View previous interviews and performance reports.
* 💳 **Credit-Based System** — Interviews consume credits and users can purchase additional credits.
* 💰 **Razorpay Integration** — Secure payment integration for purchasing interview credit packages.
* 🔐 **Authentication** — Secure user authentication with Firebase Authentication.
* 📱 **Responsive UI** — Designed to work across different screen sizes.
* ⚡ **Smooth Animations** — Interactive UI powered by Motion.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Redux Toolkit
* Axios
* React Router
* Motion
* React Icons
* Web Speech API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* PDF.js

### AI & Services

* OpenRouter AI
* Firebase Authentication
* Razorpay

### Development Tools

* Git
* GitHub
* Postman
* Vite
* Nodemon

---

## 🏗️ Project Architecture

```text
AI-Interview-Agent/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── config/
│   ├── public/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔄 How It Works

```text
User
  ↓
Select Role & Experience
  ↓
Upload Resume (Optional)
  ↓
Resume Analysis
  ↓
AI Generates Personalized Questions
  ↓
Technical / HR Interview
  ↓
User Answers Questions
  ↓
AI Evaluates Answers
  ↓
Performance Analysis
  ↓
Final Interview Report
  ↓
Interview History
```

---

## 🧠 AI Interview Flow

The platform uses the user's information to create a personalized interview experience.

The AI considers:

* Job role
* Years of experience
* Technical skills
* Projects
* Resume content
* Interview type

Based on this information, InterviewIQ.AI generates relevant questions and evaluates the user's responses.

The final report provides metrics such as:

* **Overall Score**
* **Confidence**
* **Communication**
* **Correctness**
* **Question-wise Scores**
* **AI Feedback**

---

## 📄 Resume Analysis

Users can optionally upload their resume in PDF format.

The backend extracts text from the PDF using **PDF.js** and sends the extracted information to the AI model.

The system identifies:

```text
Role
Experience
Projects
Skills
```

This information is then used to generate more personalized interview questions.

---

## 💳 Credit System

InterviewIQ.AI uses a credit-based model.

Users receive credits that can be used to start AI interviews.

Example plans:

| Plan         | Credits | Price |
| ------------ | ------- | ----- |
| Free         | 100     | ₹0    |
| Starter Pack | 150     | ₹100  |
| Pro Pack     | 650     | ₹500  |

Additional credits can be purchased through **Razorpay**.

---

## 📊 Interview Reports

After completing an interview, users receive a performance report containing:

```text
Overall Score
Confidence Score
Communication Score
Correctness Score
Question-wise Scores
AI-generated Feedback
```

Users can also access their previous interviews through the **Interview History** section.

---

## 🔐 Authentication

The application uses **Firebase Authentication** for secure user authentication.

Authenticated users can:

* Access their dashboard
* Start interviews
* View interview history
* View performance reports
* Purchase credits
* Manage their interview data

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-Interview-Agent.git
cd AI-Interview-Agent
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Create a `.env` file inside the `client` directory for your frontend configuration.

```env
VITE_SERVER_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

> Make sure the variable names match the ones used in your project code.

---

## 🚀 Running the Project

### Start Backend

```bash
cd server
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start Frontend

```bash
cd client
npm run dev
```

The frontend will run on the Vite development server, usually:

```text
http://localhost:5173
```

---

## 🔌 API Modules

The backend provides APIs for major application functionalities including:

```text
Authentication
    ↓
Interview Management
    ↓
Resume Analysis
    ↓
Question Generation
    ↓
Answer Evaluation
    ↓
Interview Reports
    ↓
Interview History
    ↓
Payments & Credits
```

---

## 🎯 Future Enhancements

Some planned improvements include:

* 📈 Advanced performance trend analysis
* 🧠 Adaptive interview difficulty
* 💬 Real-time AI follow-up questions
* 🎥 Video interview mode
* 📊 Detailed skill-wise analytics
* 🏆 Interview performance leaderboard
* 📧 Email reports
* 🌐 Deployment with production infrastructure
* 🤝 More interview categories and job roles

---

## 👩‍💻 Author

### Jeshika Sharma

**Computer Science & Engineering Student | MERN Stack Developer | AI Enthusiast**

This project was developed as a full-stack application to explore the integration of **MERN Stack, Generative AI, authentication, payment systems, resume processing, and real-time interview experiences**.

---

## ⭐ Support

If you found this project interesting or useful, consider giving it a ⭐ on GitHub!

---

## 📜 License

This project is created for educational and development purposes.
