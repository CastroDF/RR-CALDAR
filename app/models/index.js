const mongoose = require("mongoose");

const db = {}
db.mongoose = mongoose;
db.url = "mongodb+srv://caldar:caldar1234@cluster0.ic0eo.mongodb.net/caldar?retryWrites=true&w=majority";
db.boilerTypes = require("./boiler-types.js")(mongoose);
db.appointments = require("./appointments.js")(mongoose);

module.exports = db;