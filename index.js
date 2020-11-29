<<<<<<< HEAD
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
=======
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
>>>>>>> d4cc343... Changes in the proyect, to connect with mongodb cloud seervice
const PORT = 4000;
const db = require("./app/models")
const router = require('./app/routes');

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Controllers
app.use('/boiler-types', boilerTypesController);
app.use('/building', buildingController);
=======
app.use("/boiler-types", boilerTypesController);
app.use("/technicians", techniciansTypeController);
>>>>>>> 275ca28... Changes
=======
// // Support Cross-Origin Resource Sharing
// app.use(cors());


=======
// Support Cross-Origin Resource Sharing
 app.use(cors());
>>>>>>> f172c40... Deleted commets

db.mongoose
  .connect(db.url, {
    useNewUrlParser :true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to the database");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(router);

<<<<<<< HEAD
// app.use("/boiler-types", boilerTypesController);
// app.use("/technicians", techniciansTypeController);
>>>>>>> d4cc343... Changes in the proyect, to connect with mongodb cloud seervice

=======
>>>>>>> f172c40... Deleted commets
app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
