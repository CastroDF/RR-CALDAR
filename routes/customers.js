const customersCtrl = require('../controllers/customers.js');
const router = require('express').Router();

// getCustomerAll
router.get('/', customersCtrl.findAll);
// createCustomer
router.post('/', customersCtrl.create);
// getCustomerById
router.get('/:id', customersCtrl.findOne);
// getCustomerByValue
router.get('/:value', customersCtrl.findOne);
// updateCustomerById
router.put('/:id', customersCtrl.update);
// deleteCustomerById
router.delete('/:id', customersCtrl.delete);

module.exports = router;
