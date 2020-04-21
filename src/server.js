// import InfermedicaApi from "./infermedica-api";
// import settings from "./settings";
// import Patient from "./patient";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const InfermedicaApi = require("./infermedica-api");

dotenv.config({ path: __dirname + "/../.env" });
const app = express();

const diagnosisRouter = require("./routes/diagnosis");

const payload = {
  sex: "male",
  age: 30,
  evidence: [
    {
      id: "s_21",
      choice_id: "",
      initial: "true",
    },
  ],
};

// // this.api.getSymptoms().then(console.log);

// this.api._post(this.api.apiUrl, payload).then(console.log);

// app.use(cors());

// // this.api.getSymptoms().then(console.log);

// this.api._post(this.api.apiUrl, payload).then(console.log);

// app.use(cors());

// // this.api.getSymptoms().then(console.log);

// this.api._post(this.api.apiUrl, payload).then(console.log);

app.use(cors());

app.use("/diagnosis", diagnosisRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server started on port 3000"));
