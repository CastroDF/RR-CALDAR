const technicias = require("../controllers/technicians.js");

var router = require("express").Router();

//Retrive all technicians
router.get("/", technicias.findAll);

//Retrive a single technicians with id
router.get("/:id", technicias.findOne);

module.exports = router;