var express = require('express');
var cors = require('cors');
const router = express.Router();
var app = express();

router.use(cors());

const port = 3000;
const appointments = require('../data/appointments.js');

router.get('/appointments', (req, res) =>  res.json(appointments));

router.get('/appointments/:id', (req, res) => {
    const found = appointments.some(appointment => appointment.id === parseInt(req.params.id));
    if(found){
        res.json(appointments.filter(appointment => appointment.id === parseInt(req.params.id)));
        res.json(req.params.id);
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

router.get('/appointments/delete/:id', (req, res) => {
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


app.get("/getAppointmentsBySkillsId/:buildingId", (req, res) => {
    const buildingIdNum = parseInt(req.params.buildingId);
    const found = appointments.some(appointments => {
        appointments.buildingId.includes(buildingIdNum)
    });

    if (found) {
        res.json(appointments.filter(appointments => {
            appointments.buildingId.includes(buildingIdNum)
        }))
    } else {
        res.status(400).json({ msg: `No boiler type with the buildingId id of ${req.params.buildingId}` })
    }
});


app.get("/getAppointmentaByDescription/:boilerId", (req, res) => {
    const found = appointments.some(appointments => {
        appointments.boilerId === parseInt(req.params.boilerId)
    });

    if (found) {
        res.json(appointments.filter(appointments => {
            appointments.boilerId === parseInt(req.params.boilerId)
        }))
    } else {
        res.status(400).json({ msg: `No boiler type with the boilerId of ${req.params.boilerId}` })
    }
});


app.get("/getAppointmentsByStock/:start_timestamp", (req, res) => {
    const found = appointments.some(appointments => {
        appointments.start_timestamp === req.params.start_timestamp;
    });

    if (found) {
        res.json(appointments.filter(appointments => {
            appointments.start_timestamp === req.params.start_timestamp;
        }));
    } else {
        res.status(400).json({ msg: `No boiler type with the start_timestamp of ${req.params.start_timestamp}` })
    }
});


app.get("/getAppointmentsByStock/:end_timestamp", (req, res) => {
    const found = appointments.some(appointments => {
        appointments.end_timestamp === req.params.end_timestamp;
    });

    if (found) {
        res.json(appointments.filter(appointments => {
            appointments.end_timestamp === req.params.end_timestamp;
        }));
    } else {
        res.status(400).json({ msg: `No boiler type with the stock of ${req.params.end_timestamp}` })
    }
});




router.listen(port, () => {
    console.log(`Radium app listening at http://localhost: ${port} `);
})
