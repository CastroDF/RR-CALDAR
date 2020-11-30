var express = require('express');
const router = express.Router();
const appointments = require('../data/appointments.js');

router.get('/', (req, res) =>  res.json(appointments));

router.get('/:id', (req, res) => {
    const found = appointments.some(appointment => appointment.id === parseInt(req.params.id));
    if(found){
        res.json(appointments.filter(appointment => appointment.id === parseInt(req.params.id)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

router.get('/delete/:id', (req, res) => {
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

router.get("/getAppointmentsByBuilding/:buildingId", (req, res) => {
    const found = appointments.some(appointment => appointment.buildingId === parseInt(req.params.buildingId));
    if(found){
        var index = appointments.map((appointment) => appointment.buildingId ).indexOf(parseInt(req.params.buildingId));
        if (index !== -1) {
            appointments.splice(index, 1);
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.buildingId}`});
    }
});

router.get("/getAppointmentaByBoiler/:boilerId", (req, res) => {
    const found = appointments.some(appointments => appointments.boilerId === parseInt(req.params.boilerId));

    if (found) {
        res.json(appointments.filter(appointments => appointments.boilerId === parseInt(req.params.boilerId)))
    } else {
        res.status(400).json({ msg: `No boiler type with the boilerId of ${req.params.boilerId}` })
    }
});

router.get("/getAppointmentsStart/:start_timestamp", (req, res) => {
    const found = appointments.some(appointments => appointments.start_timestamp === req.params.start_timestamp);

    if (found) {
        res.json(appointments.filter(appointments => appointments.start_timestamp === req.params.start_timestamp));
    } else {
        res.status(400).json({ msg: `No boiler type with the start_timestamp of ${req.params.start_timestamp}` })
    }
});

router.get("/getAppointmentsEnd/:end_timestamp", (req, res) => {
    const found = appointments.some(appointments => appointments.end_timestamp === req.params.end_timestamp);

    if (found) {
        res.json(appointments.filter(appointments => appointments.start_timestamp === req.params.start_timestamp));
    } else {
        res.status(400).json({ msg: `No boiler type with the stock of ${req.params.end_timestamp}` })
    }
});


