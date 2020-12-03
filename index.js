require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');
const router = require('./routes');
const db = {};

const MONGO_ATLAS_USE = process.env.MONGO_ATLAS_USER || 'no definida';
console.log('mi string de mongo atlas es:', MONGO_ATLAS_USE);
// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Support Cross-Origin Resource Sharing
app.use(cors());

db.mongoose = mongoose;
db.url = 'mongodb+srv://nico123:nico123@cluster0.wl5wc.mongodb.net/RR-CALDAR?retryWrites=true&w=majority';
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
