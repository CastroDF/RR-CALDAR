const techniciansRouter = require('./technicians');
const buildingsRouter = require('./building');
const boilersRouter = require('./boilers');
const boilerTypesRouter = require('./boiler-types');
const appointmentsRouter = require('./appointments');
const customersRouter = require('./customers.js');
const router = require('express').Router();

router.use('/technicians', techniciansRouter);
router.use('/buildings', buildingsRouter);
router.use('/boilers', boilersRouter);
router.use('/boiler-types', boilerTypesRouter);
router.use('/appointments', appointmentsRouter);
router.use('/customers.js', customersRouter);

module.exports = router;
