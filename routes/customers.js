const customers = require('../controllers/customers.js');
const router = require('express').Router();

// createCustomer
router.post('/', customers.create);

// getCustomerAll
router.get('/customers', customers.findAll);

// getCustomerById
router.get('/:id', customers.findOne);

// getCustomerByValue
router.get('/:type', customers.findOne);

// editCustomerById
router.put('/:id', customers.update);

// deleteCustomerById
router.delete('/delete/:id', customers.deleteById);

module.exports = router;
