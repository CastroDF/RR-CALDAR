const db = require("../models");
const Technicians = db.Technicians;


//Get all technicians
exports.findAll = (req, res) =>{
  Technicians.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error ocurred while retreving buildings."
      });
    });
};

//Get a single technicians by id
exports.findOne = (req, res) => {
  Technicians.findOne({id: req.params.id})
    .then(data => {
      if(!data) {
        console.log('pasa por aca')
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`
        })
      }
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retreving technicians"
      });
    });
};


