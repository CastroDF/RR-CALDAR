const  mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://nico123:nico123@cluster0.wl5wc.mongodb.net/RR-CALDAR?retryWrites=true&w=majority';
db.Technicians = require("./technicians-data.js")(mongoose);

module.exports = db;