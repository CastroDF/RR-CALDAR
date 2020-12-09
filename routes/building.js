const buildings = require('../controllers/buildings.js');
const router = require('express').Router();

// getAllBuildings
router.get('/', buildings.getBuildingsAll);

// Create Building
router.post('/', buildings.create);

// getBuildingById
router.get('/:id', buildings.getBuildingById);
// getBuildingByAddress
router.get('/address/:address', buildings.getBuildingByAddress);
// getBuildingByBoilersId
router.get('/boilers/:boilersId', buildings.getBuildingByBoilerId);
// getBuildingByfullName
router.get('/name/:fullName', buildings.getBuildingByFullName);
// getBuildingByPhone
router.get('/phone/:phone', buildings.getBuildingByPhone);
// modifyBuildingById
router.put('/:id', buildings.updateBuilding);

// deleteBuildingById
router.delete('/delete/:id', buildings.deleteById);

module.exports = router;
