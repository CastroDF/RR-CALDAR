const boilers = require('../controllers/boilers.js');
const router = require('express').Router();

// getBoilersAll
router.get('/', boilers.getBoilersAll);

// Create Boiler
router.post('/', boilers.create);

// getBoilerById
router.get('/:id', boilers.getBoilerById);

// getBoilersByTypeId
router.get('/type/:typeId', boilers.getBoilersByTypeId);

// getBoilersByMaintenanceRate
router.get('/maintenancerate/:maintenance_rate', boilers.getBoilerByMaintenanceRate);

// getBoilersByHourMaintenanceCost
router.get('/maintenancehour/:hour_maintenance_cost', boilers.getBoilersByHourMaintenanceCost);

// getBoilersByPhone
router.get('/eventualhour/:hour_eventual_cost', boilers.getBoilersByHourEventualCost);

// modifyBoilerById
router.put('/:id', boilers.updateBoiler);

// deleteBoilerById
router.delete('/delete/:id', boilers.deleteById);

module.exports = router;
