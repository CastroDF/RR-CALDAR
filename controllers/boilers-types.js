var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

const port = 3000;
const boilerTypes = require('../data/boiler-types.js');

app.get('/boiler-types', (req, res) =>  res.json(boilerTypes)); 

app.get('/boiler-types/:id', (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.id === parseInt(req.params.id));
    if(found){
        res.json(boilerTypes.filter(boilerType => boilerType.id === parseInt(req.params.id)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    } 
}); 

app.get('/boiler-types/delete/:id', (req, res) => {
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


app.get("/getBoilerTypesSkill/:skillsId", (req, res) => {
    const found = boilerTypes.some(boilerTypes => {boilerTypes.skillsId.includes(parseInt(req.params.skillsId))});
    console.log(found);
    if(found){
        res.json(boilerTypes.filter(boilerTypes.skillid.some(skillid => skillid === parseInt(req.params.skillsId)) === parseInt(req.params.skillsId)));
        res.json(req.params.skillsId);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.skillsId}`});
    } 
});

// getBoilerTypesByDescription
app.get("/getBoilerTypesDescription/:description", (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.description === req.params.description);
    console.log(found);

    if(found){
        res.json(boilerTypes.filter(boilerType => boilerType.description === (req.params.description).toString));
        res.json(req.params.description);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.description}`});
    } 
});

// getBoilerTypesByStock
app.get("/getBoilerTypesStock/:stock", (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.stock === parseInt(req.params.stock));
    if(found){
        res.json(boilerTypes.filter(boilerType => boilerType.stock === parseInt(req.params.stock)));
        res.json(req.params.stock);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    } 
});


app.listen(port, () => {
    console.log(`Radium app listening at http://localhost: ${port} `);
})
