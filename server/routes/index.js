const router = require("express").Router();
const apiRouter = require("./apiRouter");

router.use("/api", apiRouter);

module.exports = router;
