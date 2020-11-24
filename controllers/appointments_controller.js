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

//ex. http://localhost:3000/appointments/edit/1?stock=1
app.get('/appointments/edit/:id', (req, res) => {
    const query = req.query;
    const params = req.params; 
    const prop = Object.getOwnPropertyNames(req.query);
    const value = Object.values(req.query);
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



router.listen(port, () => {
    console.log(`Radium app listening at http://localhost: ${port} `);
})
