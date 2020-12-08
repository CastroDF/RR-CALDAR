// const { route } = require('./technicians');
const techniciansRouter = require('./technicians');
const buildingsRouter = require('./building');
const boilersRouter = require('./boilers');

const router = require('express').Router();

router.use('/technicians', techniciansRouter);
router.use('/buildings', buildingsRouter);
router.use('/boilers', boilersRouter);

// const { routeBoilerTypes } =  require('./boiler-types');
const boilerTypesRouter = require('./boiler-types');

// const { routeAppointments } =  require('./appointments');
const appointmentsRouter = require('./appointments');

router.use('/boiler-types', boilerTypesRouter);
router.use('/appointments', appointmentsRouter);

module.exports = router;
