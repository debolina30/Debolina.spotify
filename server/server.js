// Loading environment varaibles
require("dotenv").config();

// Express
const express = require("express");
const app = express();

// Database

//Router
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

app.use("/", routes);
