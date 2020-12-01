const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Controllers
const boilerTypesController = require('./controllers/boiler-types-controller');
const buildingController = require('./controllers/building-controller');

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

app.use(PlayersRoutes);

app.listen({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
