var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

const port = 3000;
const appointments = require('../data/appointments.js');

app.get('/appointments', (req, res) =>  res.json(appointments)); 

app.get('/appointments/:id', (req, res) => {
    const found = appointments.some(appointment => appointment.id === parseInt(req.params.id));
    if(found){
        res.json(appointments.filter(appointment => appointment.id === parseInt(req.params.id)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    } 
}); 

app.get('/appointments/delete/:id', (req, res) => {
    const found = appointments.some(appointment => appointment.id === parseInt(req.params.id));
    if(found){
        var index = appointments.map((appointment) => appointment.id ).indexOf(parseInt(req.params.id));
        if (index !== -1) {
            appointments.splice(index, 1);
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    } 
}); 

app.get('/appointments/edit/:id/:clave/:valor', (req, res) => {
    const found = appointments.some(appointment => appointment.id === parseInt(req.params.id));
    if(found){
        var index = appointments.map((appointment) => appointment.id ).indexOf(parseInt(req.params.id));
        if (index !== -1) {
            appointments[index][req.params.clave] = req.params.valor; 
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    } 
}); 



app.listen(port, () => {
    console.log(`Radium app listening at http://localhost: ${port} `);
})
