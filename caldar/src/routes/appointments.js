const appointments = require('../controllers/appointments.js');
const router = require('express').Router();

// appointments
router.get('/', appointments.findAll);
router.post('/', appointments.create);
router.get('/:id', appointments.findOne);
router.get('/getStart/:value', appointments.findOneStart);
router.get('/getEnd/:value', appointments.findOneEnd);
router.put('/:id', appointments.update);
router.delete('/:id', appointments.delete);

module.exports = router;
