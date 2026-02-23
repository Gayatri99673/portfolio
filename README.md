# 🚀 Full Stack MERN Portfolio Application

## 🔗 Live Demo

- 🌐 **Frontend:** https://yourapp.vercel.app  
- ⚙️ **Backend API:** https://yourapi.up.railway.app  

---

## 🧠 Project Overview

This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js).

The application demonstrates secure authentication, RESTful API architecture, database integration, and responsive frontend design.

Frontend and backend are deployed separately to simulate real-world production architecture.

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Axios
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- CORS
- Environment Variables

---

## ✨ Features

- 🔐 User Registration & Login
- 🔒 JWT-based Authentication
- 📦 Full CRUD Operations
- 🛡 Protected Routes
- 🌍 RESTful API Structure
- 📱 Fully Responsive UI
- ⚙️ Environment-based Configuration
- 🚀 Production Deployment

---

## 📁 Project Structure

```
root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone <your-repository-url>
cd <project-folder>
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

Create a `.env` file inside `backend`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=gayatriraghuwanshi975@gmail.com
EMAIL_PASS=qttg kxsm fivc ujpv



mongodb+srv://gayatriraghuwanshi975_db_user:<db_password>@cluster0.73oqeyi.mongodb.net/?appName=Cluster0
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```
cd frontend
npm install
npm start
```

Create a `.env` file inside `frontend`:

```
REACT_APP_API_URL=http://localhost:5000
```

---

## 🧪 Example API Endpoints

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/items
POST   /api/items
PUT    /api/items/:id
DELETE /api/items/:id
```

---

## 📌 Future Improvements

- Role-based authentication
- Email verification
- Password reset functionality
- Docker integration
- CI/CD pipeline
- Unit & integration testing

---

## 👩‍💻 Author

Gayatri Raghuwanshi  
Full Stack Developer (MERN Stack)







<!-- Improve structure.
Add one strong real-world project.
Deploy properly.
Polish UI. -->
