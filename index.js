const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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

// Support Cross-Origin Resource Sharing
app.use(cors());

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/boiler-types', boilerTypesController);

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
