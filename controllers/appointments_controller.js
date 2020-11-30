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
            res.status(500).json({msg: `The appointments with id ${req.params.id} was deleted`});
        }
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

router.get("/getAppointmentsByBuilding/:buildingId", (req, res) => {
    const found = appointments.some(appointment => appointment.buildingId === parseInt(req.params.buildingId));
    if(found){
        res.json(appointments.filter(appointment => appointment.buildingId === parseInt(req.params.buildingId)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No buildingId with the id of ${req.params.buildingId}`});
    }
});

router.get("/getAppointmentaByBoiler/:boilerId", (req, res) => {
    const found = appointments.some(appointment => appointment.boilerId === parseInt(req.params.boilerId));
    if(found){
        res.json(appointments.filter(appointment => appointment.boilerId === parseInt(req.params.boilerId)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No boilerId with the id of ${req.params.boilerId}`});
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
        res.json(appointments.filter(appointments => appointments.end_timestamp === req.params.end_timestamp));
    } else {
        res.status(400).json({ msg: `No boiler type with the end_timestamp of ${req.params.end_timestamp}` })
    }
});

module.exports = router;
