const boilerTypes = require('../controllers/boiler-types-controllers.js');
const router = require("express").Router();

router.get("/", boilerTypes.findAll);
router.post("/", boilerTypes.create);
router.get("/:id", boilerTypes.findOne);
router.get("/:value", boilerTypes.findOne);
router.put("/:id", boilerTypes.update);
router.delete("/:id", boilerTypes.delete);

module.exports = router;