const mongoose = require('mongoose');
const Boiler = require('../models/boilers')(mongoose);

// Create Boilers
exports.create = (req, res) => {
  if (!req.body.id || !req.body.typeId || !req.body.maintenance_rate || !req.body.hour_maintenance_cost || !req.body.hour_eventual_cost) {
    return res.status(400).send({
      message: 'Incomplete data'
    });
  };
  const newBoiler = new Boiler({
    id: req.body.id,
    typeId: req.body.typeId,
    maintenance_rate: req.body.maintenance_rate,
    hour_maintenance_cost: req.body.hour_maintenance_cost,
    hour_eventual_cost: req.body.hour_eventual_cost
  });
  newBoiler
    .save(newBoiler)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                        err.message || 'Error ocurred trying to create Boiler'
      });
    });
};

// Get all boilers
exports.getBoilersAll = (req, res) => {
  Boiler.find({})
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Error ocurred trying to retrieve boilers.'
      });
    });
};

// Get boiler by id
exports.getBoilerById = (req, res) => {
  Boiler.findOne({ id: req.params.id })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler ID ${req.params.id} was not found`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving boiler.'
      });
    });
};

// Get boiler by type id
exports.getBoilersByTypeId = (req, res) => {
  Boiler.find({ typeId: req.params.typeId })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Boilers Type ID: "${req.params.typeId}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving Boilers'
      });
    });
};

// Get boiler by maintenance rate
exports.getBoilerByMaintenanceRate = (req, res) => {
  Boiler.find({ maintenance_rate: req.params.maintenance_rate })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Boiler with rate: "${req.params.maintenance_rate}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving boilers'
      });
    });
};

// Get boiler by maintenance cost
exports.getBoilersByHourMaintenanceCost = (req, res) => {
  Boiler.find({ hour_maintenance_cost: req.params.hour_maintenance_cost })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Boiler with Maintenance Cost: "${req.params.hour_maintenance_cost}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving boilers'
      });
    });
};

// Get boiler by hour eventual cost
exports.getBoilersByHourEventualCost = (req, res) => {
  Boiler.find({ hour_eventual_cost: req.params.hour_eventual_cost })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `No Boilers with Eventual Cost: "${req.params.hour_eventual_cost}" were found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving boilers'
      });
    });
};

// Update a boiler
exports.updateBoiler = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Must have at least 1 parameter to update a Boiler'
    });
  };
  const id = req.params.id;

  Boiler.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Can't update Boiler ID "${id}"`
        });
      } else {
        res.send({
          message: `Building ID "${id}" was updated successfully`
        });
      };
    });
};

// Delete boiler by id
exports.deleteById = (req, res) => {
  Boiler.findOneAndRemove({ id: req.params.id }, { useFindAndModify: false })
    .then(data => {
      res.send({ message: `Boiler ID ${req.params.id} was removed succesfully` });
    })
    .catch(err => {
      res.status(500).send({
        message:
                        err.message || `Boiler ID ${req.params.id} can't be deleted`
      });
    });
};
