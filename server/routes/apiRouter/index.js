const router = require("express").Router();
const songsRouter = require("./songsRouter");

router.get("/", (req, res) => {
  res.send("ok");
});

router.use("/songs", songsRouter);
router.use("/songs", songsRouter);

module.exports = router;
