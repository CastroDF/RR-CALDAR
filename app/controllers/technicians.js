const db = require('../models');
const Technicians = db.Technicians;
// Crate technicians
exports.create = (req, res) => {
  if (!req.body.id || !req.body.first_name || !req.body.last_name) {
    return res.status(400).send({
      message: 'Incomplete data'
    });
  }
  const newTechnicians = new Technicians({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name
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
