const customersCtrl = require('../controllers/customers_Controllers');
const router = require("express").Router();

router.get("/", customersCtrl.findAll);
router.post("/", customersCtrl.create);
router.get("/:id", customersCtrl.findOne);
router.get("/:value", customersCtrl.findOne);
router.put("/:id", customersCtrl.update);
router.delete("/:id", customersCtrl.delete);

module.exports = router;
