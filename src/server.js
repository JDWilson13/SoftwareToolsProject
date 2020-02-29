// import InfermedicaApi from "./infermedica-api";
// import settings from "./settings";
// import Patient from "./patient";
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../.env" });
const app = express();

const exampleRouter = require("./routes/example");

app.use("/example", exampleRouter);

app.get("/", (req, res) => {
  res.send("Hello World " + req.query.question);
});

app.listen(3000, () => console.log("Server started on port 3000"));

// var message = "Imma programming wizard";
// console.log(message);

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end(message);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// this.api = new InfermedicaApi(settings["appID"], settings["appKey"]);
// this.patient = new Patient();
// x;
