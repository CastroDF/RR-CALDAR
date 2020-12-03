const { route } =  require('./boiler-types');
const boilerTypesRouter = require('./boiler-types');

const { route } =  require('./appointments');
const appointmentsRouter = require('./appointments');

var router = require("express").Router();
router.use('/boiler-types', boilerTypesRouter)
router.use('/appointments', appointmentsRouter)

module.exports = router;