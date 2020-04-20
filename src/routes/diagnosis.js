const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = new Router();
const DiagnosisController = require("../controllers/diagnosis");
const InfermedicaApi = require("../infermedica-api");

this.api = new InfermedicaApi(
  process.env.INFERMEDICA_APP_ID,
  process.env.INFERMEDICA_APP_KEY
);

router.use((req, res, next) => {
  console.log("Diagnosis Made!", req.query);
  res.send({ message: "I diagnose you with dead!" });
  next();
});

router.get("/symptoms", (req, res, next) => {
  console.log("PLEASE GOD: ", req);
});

module.exports = router;
