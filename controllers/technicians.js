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
// get by email
app.get('/technicians/getTechniciansByAttribute/email:email', (req, res) =>{//?Score=${score} /getby/:email' 
    queryObject = url.parse(req.url,true).query;
    console.log('el objeto', queryObject);  
    const found = technicians.some(technical => technical.email === req.params.email);
    if(found){
        res.json(technicians.filter(technical => technical.email === req.params.email)); 
    } else {
        res.status(400).json({msg: `Member not found ${req.params.email} sale por aca`});//an answerwhen the response fail
    }
});
// //get by Name
// router.get('/getby/:firstname', (req, res) =>{
//     // res.send(req.params.email);
//     const found = technicians.some(technical => technical.firstname === req.params.firstname);
//     if(found){
//         res.json(technicians.filter(technical => technical.firstname === req.params.firstname)); 
//     } else {
//         res.status(400).json({msg: `Member not found ${req.params.firstname}`});//an answerwhen the response fail
//     }
// });

//Delete a technician by Id
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