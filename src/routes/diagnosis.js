const { Router } = require("express");
const fs = require("fs");
const path = require("path");
var bodyParser = require("body-parser");
const router = new Router();
const DiagnosisController = require("../controllers/diagnosis");
const InfermedicaApi = require("../infermedica-api");
let question = "";
let symptomId = "";

router.use(bodyParser.json());
this.api = new InfermedicaApi(
  process.env.INFERMEDICA_APP_ID,
  process.env.INFERMEDICA_APP_KEY
);

// router.use((req, res, next) => {
//   // console.log("Diagnosis Made!", req);
//   res.send({
//     question: this.question,
//     symptomId: this.symptomId,
//   });
//   next();
// });

// router.get("/", async (req, res) => {
//   const apiResponse = await this.api.getSymptoms();
//   res.sedn(apiResponse);
// });

router.post("/symptoms", async (req, res) => {
  // console.log(req.body);
  console.log(req.query);

  const apiResponse = await this.api.diagnosis(req.body);
  console.log(JSON.stringify(apiResponse, null, 2));
  // console.log("apiResponse: ", apiResponse.question.items["0"].id);
  // this.question = question;
  // this.symptomId = symptomId;

  res.send(apiResponse);

  // console.log(this.api.diagnosis(req.body.question.items.id));
});

module.exports = router;
