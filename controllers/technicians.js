const express = require('express');
const path = require('path');
const url = require('url');
const app = express();
const technicians = require('../data/technicians-data');

app.get('/',(req, res) => {
    res.send('<h1>Hello world!!</h1>');
});

//this are only methods for get an answer
//get all technicians
app.get('/technicians/getAll', (req, res) => {
    res.json(technicians);
});

//get a single technicians by id
app.get('/technicians/getById/:id', (req, res, next) =>{
    const found = technicians.some(technical => technical.id === parseInt(req.params.id));
    if(found){
        res.json(technicians.filter(technical => technical.id === parseInt(req.params.id)));//parsea porq devuelve un string 
    } else {
        //next() 
        res.status(400).json({msg: `Member not found ${req.params.id} `});//an answerwhen the response fail
    }
});

//Get a technician by attribute
app.get('/technicians/getByAttribute/:type/:data', (req, res) =>{
    //queryObject = url.parse(req.url).search;
    console.log('el objeto', req.params.type);
    switch(req.params.type){
        case 'email':
            var found = technicians.some(technical => technical.email === req.params.data);
            if(found){
                res.json(technicians.filter(technical => technical.email === req.params.data));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.email} sale por aca`});//an answerwhen the response fail
            }
            break;
        case 'first_name':
            found = technicians.some(technical => technical.first_name === req.params.data);
            if(found){
                res.json(technicians.filter(technical => technical.first_name === req.params.data));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.data}`});
            }
            break;
        case 'last_name':
            found = technicians.some(technical => technical.last_name === req.params.data);
            if(found){
                res.json(technicians.filter(technical => technical.last_name === req.params.data));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.data}`});
            }
            break;
        case 'typeIds':
            found = technicians.some(technical => technical.typeIds === parseInt(req.params.data));
            if(found){
                res.json(technicians.filter(technical => technical.typeIds === parseInt(req.params.data)));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.data}`});
            }
            break;
        case 'skillsId':
            found = technicians.some(technical => technical.skillsId === req.params.data);
            if(found){
                res.json(technicians.filter(technical => technical.skillsId === req.params.data));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.data}`});
            }
            break;
        case 'daily_capacity':
            found = technicians.some(technical => technical.daily_capacity === req.params.data);
            if(found){
                res.json(technicians.filter(technical => technical.daily_capacity === req.params.data));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.data}`});
            }
            break;
        case 'hour_rate':
            found = technicians.some(technical => technical.hour_rate === req.params.data);
            if(found){
                res.json(technicians.filter(technical => technical.hour_rate === req.params.data));
            } else {
                res.status(400).json({msg: `Member not found ${req.params.data}`});
            }
            break;
    }
});

//Delete a technician only by Id
app.delete('/technicians/delete/:id', (req, res) =>{
    const found = technicians.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({msg: 'Member deleted', technicians: technicians.filter(member => member.id !== parseInt(req.params.id))});//parsea porq devuelve un string 
    } else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});//an answerwhen the response fail
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));