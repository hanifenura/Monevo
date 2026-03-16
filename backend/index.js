import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import receiptRoutes from "./src/routes/receiptRoutes.js";
import listRoutes from "./src/routes/listRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Auth routes
app.use("/api/auth", authRoutes);

// Receipt routes
app.use("/api/receipts", receiptRoutes);

// List routes
app.use("/api/lists", listRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
