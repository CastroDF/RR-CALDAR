const boilerTypes = require('../controllers/boiler-types-controllers.js');
const appointments = require('../controllers/appointments-controllers.js');
const router = require("express").Router();

//boiler-types
router.get("/", boilerTypes.findAll);
router.post("/", boilerTypes.create);
router.get("/:id", boilerTypes.findOne);
router.get("/:value", boilerTypes.findOne);
router.put("/:id", boilerTypes.update);
router.delete("/:id", boilerTypes.delete);

//appointments
router.get("/", appointments.findAll);
router.post("/", appointments.create);
router.get("/:id", appointments.findOne);
router.get("/:value", appointments.findOne);
router.put("/:id", appointments.update);
router.delete("/:id", appointments.delete);

module.exports = router;