const db = require('../models');
const Appointments = db.appointments;

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

exports.findOneStart = (req, res) => {
  const fechaInicial = req.params.value;
  const fechaFinal = fechaInicial.substring(0, 8).concat(Number(fechaInicial.substring(8)) + 1);
  Appointments.find({ start_timestamp: { $gt: new Date(fechaInicial).toISOString(), $lt: new Date(fechaFinal).toISOString() } })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Appointments with date start ${req.params.value} was not found`
        });
      }
      res.send('el valor es:' + data);
    })
    .catch(err => {
      res.status(500).send({
        message:
                    err.message || 'Some error ocurred while retrieving appointments'
      });
    });
};

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
