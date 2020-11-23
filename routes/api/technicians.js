const express = require('express');
const router = express.Router();
const technicians = require('../../data/technicians-data');
//this are only methods for get an answer
//get all technicians
router.get('/', (req, res) => {
    res.json(technicians);
});

//get a single technicians by id
router.get('/:id', (req, res, next) =>{
    //res.send(req.params.id);
    const found = technicians.some(technical => technical.id === parseInt(req.params.id));
    console.log(technicians.id);
    if(found){
        res.json(technicians.filter(technical => technical.id === parseInt(req.params.id)));//parsea porq devuelve un string 
    } else {
        //next() 
        res.status(400).json({msg: `Member not found ${req.params.id} responde por id`});//an answerwhen the response fail
    }
});

//Delete a technician by Id
router.delete('/:id', (req, res) =>{
    // res.send(req.params.id);
    const found = technicians.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({msg: 'Member deleted', technicians: technicians.filter(member => member.id !== parseInt(req.params.id))});//parsea porq devuelve un string 
    } else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});//an answerwhen the response fail
    }
});

module.exports = router;