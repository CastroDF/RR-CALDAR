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

exports.findOne = (req, res) =>{
    BoilerTypes.findOne({id: req.params.value})
        .then(data =>{
            if(!data){
                return res.status(404).send({
                    message: `Boiler types with id ${req.params.value} was not found`
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


/* router.get('/', (req, res) =>  res.json(boilerTypes));

router.get('/:id', (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.id === parseInt(req.params.id));
    if(found){
        res.json(boilerTypes.filter(boilerType => boilerType.id === parseInt(req.params.id)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

router.get('/delete/:id', (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.id === parseInt(req.params.id));
    if(found){
        var index = boilerTypes.map((boilerType) => boilerType.id ).indexOf(parseInt(req.params.id));
        if (index !== -1) {
            boilerTypes.splice(index, 1);
            res
                .status(200)
                .json({msj: `Member with id: ${req.params.id} was deleted`});
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});


router.get("/getBoilerTypesSkill/:skillsId", (req, res) => {
    const skillsIdNumber = parseInt(req.params.skillsId);
    const found = boilerTypes.some(boilerTypes => boilerTypes.skillsId.includes(skillsIdNumber));
    console.log(found);
    if (found) {
        res.json(boilerTypes.filter(boilerTypes => {
            boilerTypes.skillsId.includes(skillsIdNumber)
        }))
    } else {
        res.status(400).json({ msg: `No boiler type with the skill id of ${req.params.skillsId}` })
    }
});


router.get("/getBoilerTypesDescription/:description", (req, res) => {
    const found = boilerTypes.some(boilerTypes => boilerTypes.description.includes(req.params.description));
    if (found) {
        res.json(boilerTypes.some(boilerTypes => {
            boilerTypes.description.includes(req.params.description)
                .status(200)
                .json({msj: `Member with id: ${req.params.id} was deleted`});
        }));
    } else {
        res.status(400).json({ msg: `No boiler type with the description of ${req.params.description}` })
    }
});


router.get("/getBoilerTypesStock/:stock", (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.stock === parseInt(req.params.stock));
    if(found){
        res.json(boilerTypes.filter(boilerType => boilerType.stock === parseInt(req.params.stock)));
        res.json(req.params.stock);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

module.exports = router; */