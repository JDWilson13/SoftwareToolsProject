const { Router } = require("express");

const router = new Router();

router.use((req, res, next) => {
  console.log("REQUEST MADE TO EXAMPLE ENDPOINT");
  next();
});


router.get("/test", (req, res, next) => {
  if (req.query.question === "1") {
    res.send("HAS QUESTION");
  } else {
    next();
  }
});

router.get("/test", (req, res) => {
  res.send();
});

module.exports = router;
