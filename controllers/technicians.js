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
//Get by First name
router.get("/getByAttributefirstName/:first_name", (req, res) => {
  const found = technicians.some(
    technical => technical.first_name === req.params.first_name
);
if(found){
    res.json(
        technicians.filter(
            technical => technical.first_name === req.params.first_name
        )
    );
} else {
    res
    .status(400)
    .json({msg: `Member not found ${req.params.first_name} `});
}
});

//Get by last name
router.get("/getByAttributelastName/:last_name", (req, res) => {
  const found = technicians.some(
    technical => technical.last_name === req.params.last_name
);
if(found){
    res.json(
        technicians.filter(
            technical => technical.last_name === req.params.last_name
        )
    );
} else {
    res
    .status(400)
    .json({msg: `Member not found ${req.params.last_name} `});
}
});

//Get by email
router.get("/getByAttributeEmail/:email", (req, res) => {
  const found = technicians.some(
    technical => technical.email === req.params.email
);
if(found){
    res.json(
        technicians.filter(
            technical => technical.email === req.params.email
        )
    );
} else {
    res
    .status(400)
    .json({msg: `Member not found ${req.params.email} `});
}
});
//Get by skillId
router.get("/getByAttribute/:skillsId", (req, res) => {
    const skillsIdNumber = parseInt(req.params.skillsId);
    const found = technicians.some((technicians) =>
      technicians.skillsId.includes(skillsIdNumber)
    );
    if (found) {
      res.json(
        technicians.filter((technicians) => technicians.skillsId.includes(skillsIdNumber))
      );
    } else {
      res.status(400).json({
        msg: `No boiler type with the skill id of ${req.params.skillsId}`,
      });
    }
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
