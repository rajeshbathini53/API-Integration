// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // 👈 Important: Serve frontend from 'public' folder

// Load users
const USERS_FILE = "./users.json";
let users = [];
if (fs.existsSync(USERS_FILE)) {
  users = JSON.parse(fs.readFileSync(USERS_FILE));
}

// API Routes
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "All fields required" });

  const newUser = { id: Date.now(), name, email };
  users.push(newUser);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => console.log(`🚀 API Server running at http://localhost:${PORT}`));
