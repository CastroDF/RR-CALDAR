const mongoose = require('mongoose');
const BoilerDF = require('../models/boilers-data-function-data')(mongoose);
// BASICS

// Create Boiler
exports.create = (req, res) => {
  if (!req.body.id || !req.body.typeId || !req.body.maintenance_rate || !req.body.hour_maintenance_cost || !req.body.hour_eventual_cost) {
    return res.status(400).send({
      message: 'Incomplete data'
    });
  };
  const newBoiler = new BoilerDF({
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
// getBoilersAll
exports.getBoilersAll = (req, res) => {
  BoilerDF.find({})
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Error ocurred trying to retrieve boilers.'
      });
    });
};
// updateBoiler
exports.updateBoiler = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Must have at least 1 parameter to update a Boiler'
    });
  };
  const id = req.params.id;

  BoilerDF.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
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
// deleteBoilerById
exports.deleteById = (req, res) => {
  BoilerDF.findOneAndRemove({ id: req.params.id }, { useFindAndModify: false })
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

// BYATTRIBUTES

// getBoilerById
exports.getBoilerById = (req, res) => {
  BoilerDF.findOne({ id: req.params.id })
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

exports.getBoilersByTypeId = (req, res) => {
  BoilerDF.find({ typeId: req.params.typeId })
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
exports.getBoilerByMaintenanceRate = (req, res) => {
  BoilerDF.find({ maintenance_rate: req.params.maintenance_rate })
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
exports.getBoilersByHourMaintenanceCost = (req, res) => {
  BoilerDF.find({ hour_maintenance_cost: req.params.hour_maintenance_cost })
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
exports.getBoilersByHourEventualCost = (req, res) => {
  BoilerDF.find({ hour_eventual_cost: req.params.hour_eventual_cost })
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
