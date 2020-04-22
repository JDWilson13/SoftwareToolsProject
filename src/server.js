const express = require("express");
const cors = require("cors");

const app = express();

const diagnosisRouter = require("./routes/diagnosis");

app.use(cors());

app.use("/diagnosis", diagnosisRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;

