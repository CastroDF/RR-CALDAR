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
//app.use('/boiler-types', boilerTypesController);

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/* async function dbConnection(){
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

//fin all Boiler Types
  const allBoilerTypes = await collectionObject.find({}).toArray();
  console.log(allBoilerTypes);
//find for attribute
  const findOneBoilerTypes = await collectionObject.findOne({stock: 4});
  console.log('filtered ==>', findOneBoilerTypes);

//create new Boiler Types
  const newBoilerTypes =
  {
    id: 5,
    description: '{"id":2,"skillsId":[1,5,13,2,5,1,12],"description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\\n\\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\\n\\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    stock: 6
  }
  await collectionObject.insertOne(newBoilerTypes)

  const insertedOne = await collectionObject.findOne({id: 5})
  console.log('inserted', insertedOne);

//update boilerTypes
  const newValues = { $set: {skillsId: "[5,1,12]", description: "Lorem ipsum dolor"}};
  await collectionObject.updateOne({id:1}, newValues)

  const updateOne = await collectionObject.findOne({id:1})
  console.log("updated==>", updateOne);
  //Delete specific Boiler Types
  await collectionObject.deleteOne({id:5})

  const allBoilerTypes = await collectionObject.find({}).toArray();
  console.log("new boilertypes list ==>", allBoilerTypes);
}
// Controllers
//const  boilerTypesController = require('../controllers/boiler-types-controllers.js'); */