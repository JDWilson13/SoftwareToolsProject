const { Router } = require("express");
const fs = require("fs");
const path = require("path");
var bodyParser = require("body-parser");
const router = new Router();
const DiagnosisController = require("../controllers/diagnosis");
const InfermedicaApi = require("../infermedica-api");

router.use(bodyParser.json());
this.api = new InfermedicaApi(
  process.env.INFERMEDICA_APP_ID,
  process.env.INFERMEDICA_APP_KEY
);

router.use((req, res, next) => {
  // console.log("Diagnosis Made!", req);
  res.send({ message: "I diagnose you with dead!" });
  next();
});

router.post("/symptoms", (req, res, next) => {
  console.log(req.body);
  // //this.api._post(this.api.url, req.body).then(console.log);
  // this.api._post(this.api.url, JSON.parse(req.body)).then(console.log);
  this.api.diagnosis(req.body).then(console.log);
});

module.exports = router;
