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

app.get('/boiler-types/edit/:id/:clave/:valor', (req, res) => {
    const found = boilerTypes.some(boilerType => boilerType.id === parseInt(req.params.id));
    if(found){
        var index = boilerTypes.map((boilerType) => boilerType.id ).indexOf(parseInt(req.params.id));
        if (index !== -1) {
            boilerTypes[index][req.params.clave] = req.params.valor;
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

app.listen(port, () => {
    console.log(`Radium app listening at http://localhost: ${port} `);
})
