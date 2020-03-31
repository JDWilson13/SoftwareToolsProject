const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = new Router();

router.use((req, res, next) => {
  console.log("Diagnosis Made!");
  res.send("I diagnose you with dead!");
  next();
});

module.exports = router;
