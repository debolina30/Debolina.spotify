const {
  CreateUser,
  LoginUser,
} = require("../../../controllers/UserController");
const auth = require("../../../utils/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.post("/register", (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  CreateUser(user, res);
});

router.post("/login", (req, res) => {
  const user = { email: req.body.email, password: req.body.password };
  // Validation
  console.log(user);

  LoginUser(user, res);
});
module.exports = router;
