const { routeBoilerTypes } =  require('./boiler-types');
const boilerTypesRouter = require('./boiler-types');

const { routeAppointments } =  require('./appointments');
const appointmentsRouter = require('./appointments');

var router = require("express").Router();
router.use('/boiler-types', boilerTypesRouter);
router.use('/appointments', appointmentsRouter);

module.exports = router;