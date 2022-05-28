const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("top 10 artists");
});

router.post("/", (req, res) => {
  // Register new artists
});

module.exports = router;
