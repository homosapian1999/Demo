import express from "express";
import dotev from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

const app = express();

dotev.config();

connectDB();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.json(
    "Hello Ankit Chandrasagar Babita Dubey. This is testing of the github stuff"
  );
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
