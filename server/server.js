import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./utils/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
connectDB();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
// app.get("/api/server", (req, res) => {
//   res.send("Hello server");
// });

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
