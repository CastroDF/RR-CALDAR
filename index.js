const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Controllers
<<<<<<< HEAD
const boilerTypesController = require('./controllers/boiler-types-controller');
const buildingController = require('./controllers/building-controller');
=======
const boilerTypesController = require("./controllers/boiler-types-controllers.js");
const techniciansTypeController = require("./controllers/technicians.js");
>>>>>>> 275ca28... Changes

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

<<<<<<< HEAD
// Controllers
app.use('/boiler-types', boilerTypesController);
app.use('/building', buildingController);
=======
app.use("/boiler-types", boilerTypesController);
app.use("/technicians", techniciansTypeController);
>>>>>>> 275ca28... Changes

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
