const boilersdf = require('../controllers/boilers-data-function-controller');
const router = require('express').Router();

// getBoilersAll
router.get('/', boilersdf.getBoilersAll);

// Create Boiler
router.post('/', boilersdf.create);

// getBoilerById
router.get('/:id', boilersdf.getBoilerById);
// getBoilersByTypeId
router.get('/type/:typeId', boilersdf.getBoilersByTypeId);
// getBoilersByMaintenanceRate
router.get('/maintenancerate/:maintenance_rate', boilersdf.getBoilerByMaintenanceRate);
// getBoilersByHourMaintenanceCost
router.get('/maintenancehour/:hour_maintenance_cost', boilersdf.getBoilersByHourMaintenanceCost);
// getBoilersByPhone
router.get('/eventualhour/:hour_eventual_cost', boilersdf.getBoilersByHourEventualCost);
// modifyBoilerById
router.put('/:id', boilersdf.updateBoiler);

// deleteBoilerById
router.delete('/delete/:id', boilersdf.deleteById);

module.exports = router;
