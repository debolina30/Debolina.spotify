const router = require("express").Router();
const songsRouter = require("./songsRouter");
const artistsRouter = require("./artistsRouter");

router.get("/", (req, res) => {
  res.send("ok");
});

router.use("/songs", songsRouter);
router.use("/artists", artistsRouter);

module.exports = router;
