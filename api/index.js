import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Service is running on PORT: 3000!!!");
});