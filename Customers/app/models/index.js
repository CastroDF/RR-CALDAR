const mongoose = require("mongoose");

const db = {};
    mongoose = mongoose;
    db.url = 'mongodb+srv://caldar:caldar1234@cluster0.ic0eo.mongodb.net/caldar?retryWrites=true&w=majority';
    db.customers = require("./customers")(mongoose);

    module.exports = db;