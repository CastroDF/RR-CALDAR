const express = require('express');
const router = express.Router();
const buildings = require('../data/buildings');

// getAllBuildings
router.get('/', (req, res) => {
  res.json(buildings);
});

// getBuildingById
router.get('/:id', (req, res) => {
  const found = buildings.some(
    (buildings) => buildings.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      buildings.filter((buildings) => buildings.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `Building ID '${req.params.id}', not found.` });
  }
});

// getBuildingByAddress
router.get('/address/:address', (req, res) => {
  const found = buildings.some(
    (buildings) => buildings.address === req.params.address
  );
  if (found) {
    res.json(
      buildings.filter((buildings) => buildings.address === req.params.address)
    );
  } else {
    res.status(400).json({ msg: `Address ${req.params.address}, not found.` });
  }
});

// getBuildingByBoilersId
router.get('/boilers/:boilersId', (req, res) => {
  const found = buildings.some(
    (buildings) => buildings.boilersId === parseInt(req.params.boilersId)
  );
  if (found) {
    res.json(
      buildings.filter(
        (buildings) => buildings.boilersId === parseInt(req.params.boilersId)
      )
    );
  } else {
    res
      .status(400)
      .json({ msg: `Boilers ID ${req.params.boilersId}, not found.` });
  }
});

// getBuildingByName
router.get('/name/:fullName', (req, res) => {
  const found = buildings.some(
    (buildings) => buildings.fullName === req.params.fullName
  );
  if (found) {
    res.json(
      buildings.filter(
        (buildings) => buildings.fullName === req.params.fullName
      )
    );
  } else {
    res
      .status(400)
      .json({ msg: `Full Name ${req.params.fullName}, not found.` });
  }
});

// getBuildingByPhone
router.get('/phone/:phone', (req, res) => {
  const found = buildings.some(
    (buildings) => buildings.phone === req.params.phone
  );
  if (found) {
    res.json(
      buildings.filter((buildings) => buildings.phone === req.params.phone)
    );
  } else {
    res.status(400).json({ msg: `Phone ${req.params.phone}, not found.` });
  }
});

// deleteBuildingByAddress
router.delete('/delete/:id', (req, res) => {
  const found = buildings.some(
    (buildings) => buildings.id === parseInt(req.params.id)
  );
  if (found) {
    res.json({
      msg: 'Building Deleted',
      buildings: buildings.filter(
        (buildings) => buildings.id !== parseInt(req.params.id)
      )
    });
  } else {
    res
      .status(400)
      .json({ msg: `No building with the ID of ${req.params.id}` });
  }
});

module.exports = router;
