const boilerTypes = require('../controllers/boiler-types.js');
const router = require('express').Router();

// boiler-types
router.get('/', boilerTypes.findAll);
router.post('/', boilerTypes.create);
router.get('/:id', boilerTypes.findOne);
router.get('/getStock/:value', boilerTypes.findOneStock);
router.put('/:id', boilerTypes.update);
router.delete('/:id', boilerTypes.delete);

module.exports = router;
