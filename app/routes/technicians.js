const technicias = require('../controllers/technicians.js');

const router = require('express').Router();

// Retrive all technicians
router.get('/', technicias.findAll);

// //Create a technician
router.post('/', technicias.create);

// Retrive a single technicians with id
router.get('/:id', technicias.findOne);

module.exports = router;
