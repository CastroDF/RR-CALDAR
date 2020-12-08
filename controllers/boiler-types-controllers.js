const db = require("../models");
const BoilerTypes = db.boilerTypes;

exports.create = (req, res)  => {
    if(!req.body.skillsId || !req.body.description || !req.body.stock){
        return res.status(400).send({
            message: "Data to create can not be empty"
        });
    }
    const newBoilerTypes = new Boilertypes({
        id: req.body.id,
        skillsId: req.body.skillsId,
        description: req.body.description,
        stock: req.body.stock
    });
    newBoilerTypes
        .save(newBoilerTypes)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating de Boiler Types"
            });
        });
};

exports.findAll = (req, res) => {
    BoilerTypes.find({})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving boiler types"
            });
        });
};

exports.findOne = (req, res) =>{
    BoilerTypes.findOne({id: req.params.id})
        .then(data =>{
            if(!data){
                return res.status(404).send({
                    message: `Boiler types with id ${req.params.id} was not found`
                })
            }
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving boiler types"
            });
        });
};

exports.findOneStock = (req, res) =>{
    BoilerTypes.findOne({stock: req.params.value})
        .then(data =>{
            if(!data){
                return res.status(404).send({
                    message: `Boiler types with stock ${req.params.value} was not found`
                })
            }
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving boiler types"
            });
        });
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }

    const id = req.params.id;

    BoilerTypes.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message: "Cannot update boiler types with id = ${id}. Maybe boiler types was not found!"
                });
            }else{
                res.send({
                    message: `boiler types was updated succesfully`
                });
            }
        })
}

exports.delete = (req, res) =>{
    const id = req.params.id;
    BoilerTypes.findOneAndRemove({id}, { useFindAndModify: false })
        .then(data =>
            res.send({ message: "Boiler Types was removed successifully"})
        )
        .catch(err =>{
            res.status(500).send({
                message: "Error removing boiler types with id = "+  id
            });
        });
};
