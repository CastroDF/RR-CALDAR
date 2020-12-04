const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');
const router = require('./routes');
const db = {};
require('dotenv').config();

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Support Cross-Origin Resource Sharing
app.use(cors());

// Databese connection values
const MONGO_DB_USER = process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_DATABASE = process.env.MONGO_DB_DATABASE;

// Establish connection
db.mongoose = mongoose;
db.url = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.wl5wc.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
db.Technicians = require('./models/technicians-data');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connected to the database');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.use(router);

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
