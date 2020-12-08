// const { route } = require('./technicians');
const techniciansRouter = require('./technicians');

const router = require('express').Router();

router.use('/technicians', techniciansRouter);

// const { routeBoilerTypes } =  require('./boiler-types');
const boilerTypesRouter = require('./boiler-types.js');

// const { routeAppointments } =  require('./appointments');
const appointmentsRouter = require('./appointments.js');

router.use('/boiler-types', boilerTypesRouter);
router.use('/appointments', appointmentsRouter);

module.exports = router;
