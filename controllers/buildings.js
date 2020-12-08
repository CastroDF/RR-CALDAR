const mongoose = require('mongoose');
const Buildings = require('../models/buildings')(mongoose);

// Create buildings
exports.create = (req, res) => {
  if (!req.body.id || !req.body.boilersId || !req.body.address || !req.body.fullName || !req.body.phone) {
    return res.status(400).send({
      message: 'Incomplete data'
    });
  };
  const newBuilding = new Buildings({
    id: req.body.id,
    address: req.body.address,
    boilersId: req.body.boilersId,
    fullName: req.body.fullName,
    phone: req.body.phone
  });
  newBuilding
    .save(newBuilding)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                        err.message || 'Error ocurred trying to create Building'
      });
    });
};

// Get all buildings
exports.getBuildingsAll = (req, res) => {
  Buildings.find({})
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Error ocurred trying to retrieve buildings.'
      });
    });
};

// Get building by id
exports.getBuildingById = (req, res) => {
  Buildings.findOne({ id: req.params.id })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Building ID ${req.params.id} was not found`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving buildings'
      });
    });
};

// Get building by address
exports.getBuildingByAddress = (req, res) => {
  Buildings.find({ address: req.params.address })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Buildings with address: "${req.params.address}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving buildings'
      });
    });
};

// Get building by boiler id
exports.getBuildingByBoilerId = (req, res) => {
  Buildings.find({ boilersId: req.params.boilersId })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Buildings with boiler id: "${req.params.boilersId}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving buildings'
      });
    });
};

// Get building by full name
exports.getBuildingByFullName = (req, res) => {
  Buildings.find({ fullName: req.params.fullName })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Buildings with Name: "${req.params.fullName}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving buildings'
      });
    });
};

// Get building by phone
exports.getBuildingByPhone = (req, res) => {
  Buildings.find({ phone: req.params.phone })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Buildings with phone: "${req.params.phone}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving buildings'
      });
    });
};

// Update a building
exports.updateBuilding = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Must have at least 1 parameter to update a Building'
    });
  };
  const id = req.params.id;

  Buildings.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Can't update Building ID "${id}"`
        });
      } else {
        res.send({
          message: `Building ID "${id}" was updated successfully`
        });
      };
    });
};

// Delete a building by id
exports.deleteById = (req, res) => {
  Buildings.findOneAndRemove({ id: req.params.id }, { useFindAndModify: false })
    .then(data => {
      res.send({ message: `Building ID ${req.params.id} was removed succesfully` });
    })
    .catch(err => {
      res.status(500).send({
        message:
                        err.message || `Building ID ${req.params.id} can't be deleted`
      });
    });
};
