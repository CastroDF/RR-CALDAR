const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Controllers
const PlayersRoutes = require('../routers/api/boiler-types.js');

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

app.use('/boiler-types', PlayersRoutes);

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
