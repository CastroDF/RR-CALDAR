const { route } =  require('./boiler-types');
const boilerTypesRouter = require('./boiler-types');

var router = require("express").Router();
router.use('/boiler-types', boilerTypesRouter)

module.exports = router;