const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Controllers
const boilerTypesController = require("./controllers/boiler-types-controller");
const buildingController = require("./controllers/building-controller");

// App
const app = express();
// Constants
const PORT = 4000;
//db
const db = require("./app/models");
const router = require("./app/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const {MongoClient} = require('mongodb');

// Support Cross-Origin Resource Sharing
app.use(cors());

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("conectedto the database");
  })
  .catch(err =>{
    console.log("cannot connect to the database!", err);
    process.exit;
  })

app.use(router);
// Controllers
app.use("/building", buildingController);


app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

