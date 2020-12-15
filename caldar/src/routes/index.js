const appointmentsRouter = require('./appointments');
const boilersRouter = require('./boilers');
const boilerTypesRouter = require('./boiler-types');
const buildingsRouter = require('./building');
const customersRouter = require('./customers');
const techniciansRouter = require('./technicians');
const router = require('express').Router();

router.use('/appointments', appointmentsRouter);
router.use('/boilers', boilersRouter);
router.use('/boiler-types', boilerTypesRouter);
router.use('/buildings', buildingsRouter);
router.use('/customers', customersRouter);
router.use('/technicians', techniciansRouter);

module.exports = router;
