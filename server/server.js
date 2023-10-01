import express from "express";
import dotev from "dotenv";

const app = express();

dotev.config();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json("Hello Ankit. This is testing of the github stuff");
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
