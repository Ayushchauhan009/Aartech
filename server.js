import express from "express";
import cors from "cors";

const app = express();

app.get((res, res) => {
  console.log("Server running");
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.listen(3000, (req, res) => {
  console.log("Server running successfully");
});
