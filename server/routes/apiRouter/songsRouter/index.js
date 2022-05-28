const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("top 10 songs");
});

router.post("/", (req, res) => {
  // Register new songs
});

module.exports = router;
