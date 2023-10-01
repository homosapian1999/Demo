import express from "express";
import dotev from "dotenv";

const app = express();

dotev.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json(
    "Hello Ankit Chandrasagar Babita Dubey. This is testing of the github stuff"
  );
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
