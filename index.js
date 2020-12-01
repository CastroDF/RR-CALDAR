const express = require("express");
// App
const app = express();
// Constants
const PORT = 4000;
//db
const db = require("./app/models");
const router = require("./app/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

// Controllers
const boilerTypesController = require("../controllers/boiler-types-controller");
const boilerTypesController = require("../controllers/building-controller");

// Constants
const PORT = 4000;

// App
const app = express();
const port = 3000;
//const getUsuarios = require('./api/usuarios.js');
const users = require('./data/person-data.js');
//app.use(express.static('data'));

// Support Cross-Origin Resource Sharing
app.use(cors());

// Support parsing of application/json type post data
app.use(bodyParser.json());


// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Controllers
app.use("/boiler-types", boilerTypesController);
app.use("/building", boilerTypesController);


//mongoose
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
//app.use('/boiler-types', boilerTypesController);

app.listen({ port: PORT }, () => {
});
