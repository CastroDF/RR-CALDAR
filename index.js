const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Controllers
const boilerTypesController = require("../controllers/boiler-types-controllers.js");

// Constants
const PORT = 4000;

// App
const app = express();

// Support Cross-Origin Resource Sharing
app.use(cors());

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/boiler-types", boilerTypesController);

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
