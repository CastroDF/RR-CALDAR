var express = require('express');
const boilerTypes = require('../../data/boiler-types.js');
const router = express.Router();

router.get('/', (req, res) =>  res.json(boilerTypes)); 

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
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    } 
}); 


router.get("/getBoilerTypesSkill/:skillsId", (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.skillsId === parseInt(req.params.skillsId));
    if(found){
        res.json(boilerTypes.filter(boilerTypes.skillid.some(skillid => skillid === parseInt(req.params.skillsId)) === parseInt(req.params.skillsId)));
        res.json(req.params.skillsId);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.skillsId}`});
    } 
});


router.get("/getBoilerTypesDescription/:description", (req, res) => {
    const found = boilerTypes.filter(boilerType => boilerType.description === req.params.description);
    console.log(found);
    if(found){
        res.json(boilerTypes.filter(boilerType => boilerType.description === req.params.description));
        res.json(req.params.description);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.description}`});
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

module.exports = router;