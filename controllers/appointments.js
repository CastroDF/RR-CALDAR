const mongoose = require('mongoose');
const Appointments = require('../models/Appointments.js')(mongoose);

// Create appointment
exports.create = (req, res) => {
  if (!req.body.boilerId || !req.body.buildingId || !req.body.start_timestamp || !req.body.end_timestamp) {
    return res.status(400).send({
      message: 'Data to create can not be empty'
    });
  }
  const newAppointments = new Appointments({
    id: req.body.id,
    boilerId: req.body.boilerId,
    buildingId: req.body.buildingId,
    start_timestamp: req.body.start_timestamp,
    end_timestamp: req.body.end_timestamp
  });
  newAppointments
    .save(newAppointments)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while creating de Appointments'
      });
    });
};

// Get all appointments
exports.findAll = (req, res) => {
  Appointments.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving appointments'
      });
    });
};

// Get appointment by id
exports.findOne = (req, res) => {
  Appointments.findOne({ id: req.params.id })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Appointments with id ${req.params.id} was not found`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving appointments'
      });
    });
};

// Get appointment by start timestamp
exports.findOneStart = (req, res) => {
  const startDate = req.params.value;
  const endDate = startDate.substring(0, 8).concat(Number(startDate.substring(8)) + 1);
  Appointments.findOne({ start_timestamp: { $gte: new Date(startDate), $lt: new Date(endDate) } })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Appointments with date start ${req.params.value} was not found`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving appointments'
      });
    });
};

// Get appointment by end timestamp
exports.findOneEnd = (req, res) => {
  Appointments.find({ end_timestamp: { $gt: new Date(req.params.value) } })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Appointments with time end ${req.params.value} was not found`
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving appointments'
      });
    });
};

// Update an appointment
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty'
    });
  }

  const id = req.params.id;

  Appointments.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update appointments with id = ${id}. Maybe appointments was not found!`
        });
      } else {
        res.send({
          message: 'appointments was updated succesfully'
        });
      }
    });
};

// Delete an appointment
exports.delete = (req, res) => {
  const id = req.params.id;
  Appointments.findOneAndRemove({ id }, { useFindAndModify: false })
    .then(data =>
      res.send({ message: 'Appointments was removed successifully' })
    )
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving appointments'
      });
    });
};
