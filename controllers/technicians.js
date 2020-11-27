const express = require("express");
const technicians = require("../data/technicians-data.js");
const router = express.Router();


//Get all technicians
router.get("/", (req, res) => {
    res.json(technicians);
});

//Get a single technicians by id
router.get("/:id", (req, res) =>{
    const found = technicians.some(
        technical => technical.id === parseInt(req.params.id)
    );
    if(found){
        res.json(
            technicians.filter(
                technical => technical.id === parseInt(req.params.id)
            )
        );
    } else {
        res
        .status(400)
        .json({msg: `Member not found ${req.params.id} `});
    }
});

//Get a technician by attribute
router.get("/technicians/getByAttribute", (req, res) =>{
    //const found = technicians.some(
        //technical => technical.id === req.params.skillsId.toString;
        console.log(technical.skillsId)
        res.send('<h1>Hello world!!</h1>');
    // if(found){
    //     res.json(
    //         technicians.filter(
    //             technical => technical.skillsId === req.params.skillsId.toString
    //         )
    //     );
    // } else {
    //     res
    //     .status(400)
    //     .json({msg: `Member not found ${req.params.id} `});
    // }
});
//Delete a technician only by Id
router.delete('/technicians/delete/:id', (req, res) =>{
    const found = technicians.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({msg: 'Member deleted', technicians: technicians.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});
    }
});

module.exports = router;
