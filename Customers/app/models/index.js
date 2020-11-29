const mongoose = require("mongoose");

const db = {};
    .mongoose = mongoose;
    db.url = '';
    db.customers = require("./customers")(mongoose);

    module.exports = db;