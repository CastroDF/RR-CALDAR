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
const boilerTypesController = require('./controllers/boiler-types-controller');
const buildingController = require('./controllers/building-controller');

//Connection Mongo
const {MongoClient} = require('mongodb');

async function dbConnection(){
    const url = "mongodb+srv://caldar:caldar1234@cluster0.ic0eo.mongodb.net/caldar?retryWrites=true&w=majority";
    const client = new MongoClient(url, {useUnifiedTopology: true});
    try{
        await client.connect();
        await boilerTypesCrud(client);
    }catch(e){
        console.error(e);
    } finally{
        await client.close();
    }
}

dbConnection().catch(console.error);

async function boilerTypesCrud(client){
  const databaseObject = await client.db("caldar");
  const collectionObject = databaseObject.collection("boiler-types");

  const allBoilerTypes = await collectionObject.find({}).toArray();
  console.log(allBoilerTypes);
}



// Controllers
//const  boilerTypesController = require('../controllers/boiler-types-controllers.js');

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

app.use("/boiler-types", boilerTypesController);


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
//app.use('/boiler-types', boilerTypesController);

app.listen({ port: PORT }, () => {
});
