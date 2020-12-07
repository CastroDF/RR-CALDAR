require('dorenv').config();

const express = require("express");
// App
const app = express();
// Constants
const PORT = process.env.PORT || 4000;
//db
const db = require("./models");
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

// Support Cross-Origin Resource Sharing
app.use(cors());

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Controllers
const boilerTypesController = require('./controllers/boiler-types-controller');
const appointmentsController = require('./controllers/appointments-controller');
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

async function appointmentsCrud(client){
  const databaseObject = await client.db("caldar");
  const collectionObject = databaseObject.collection("appointments");

  const allAppointments = await collectionObject.find({}).toArray();
  console.log(allAppointments);
}



// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Controllers
app.use("/boiler-types", boilerTypesController);

app.use("/building", boilerTypesController);

app.use("/appointments", appointmentsController);


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
