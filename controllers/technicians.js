const mongoose = require('mongoose');
const Technicians = require('../models/technicians-data.js')(mongoose);

// Crate technicians
exports.create = (req, res) => {
  if (!req.body.id || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.typeIds || !req.body.skillsId || !req.body.hour_rate || !req.body.daily_capacity) {
    return res.status(400).send({
      message: 'Incomplete data'
    });
  }
  const newTechnicians = new Technicians({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    typeIds: req.body.typeIds,
    skillsId: req.body.skillsId,
    hour_rate: req.body.hour_rate,
    daily_capacity: req.body.daily_capacity
  });
  newTechnicians
    .save(newTechnicians)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                  err.message || 'An error ocurred when a technicians was created'
      });
    });
};
// Get all technicians
exports.findAll = (req, res) => {
  Technicians.find({})
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retreving buildings.'
      });
    });
};

// Get a single technicians by id
exports.findOne = (req, res) => {
  Technicians.findOne({ id: req.params.id })
    .then(data => {
      if (!data) {
        console.log('pasa por aca');
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retreving technicians'
      });
    });
};

// Update a Technician
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty'
    });
  }

  const id = req.params.id;

  Technicians.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update the technician with id = ${id}!`
        });
      } else {
        res.send({
          message: `Technician with id = ${id} was updated succesfully`
        });
      }
    });
};

// Delete a technicians by id
exports.deleteById = (req, res) => {
  Technicians.findOneAndRemove({ id: req.params.id }, { useFindAndModify: false })
    .then(data => {
      res.send({ message: 'A technician was removed successifully' });
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || `Technician with id ${req.params.id} can not be deleted`
      });
    });
};
