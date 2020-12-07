const mongoose = require("mongoose");
//env
const MONGO_ATLAS_URL = process.env.MONGO_DB_ATLAS || 'no definida';
const MONGO_ATLAS_USER = process.env.MONGO_DB_USER || 'no definida';
const MONGO_ATLAS_PASS = process.env.MONGO_DB_PASS || 'no definida';

const db = {}
db.mongoose = mongoose;
db.url = "mongodb+srv://caldar:caldar1234@cluster0.ic0eo.mongodb.net/caldar?retryWrites=true&w=majority";
db.boilerTypes = require("./boiler-types.js")(mongoose);
db.appointments = require("./appointments.js")(mongoose);


module.exports = db;