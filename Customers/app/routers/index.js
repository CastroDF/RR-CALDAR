const { route } =  require('./customersRouter');
const customersRouter = require('./customersRouter');

var router = require("express").Router();
router.use('./customersRouter.js', customersRouter)

module.exports = router;
