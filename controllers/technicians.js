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
//Get by typeIds
router.get("/getByAttributeTypeIds/:typeIds", (req, res) => {
  const typeIdsNumber = parseInt(req.params.typeIds);
  const found = technicians.some((technicians) =>
    technicians.typeIds.includes(typeIdsNumber)
  );
  if (found) {
    res.json(
      technicians.filter((technicians) => technicians.typeIds.includes(typeIdsNumber))
    );
  } else {
    res.status(400).json({
      msg: `No boiler type with the skill id of ${req.params.typeIds}`,
    });
  }
});

//Get by skillId
router.get("/getByAttributeSkillId/:skillsId", (req, res) => {
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

//Get by hour rate
router.get("/getByAttributeHourRate/:hour_rate", (req, res) => {
  const hourRateNumber = parseInt(req.params.hour_rate);
  const found = technicians.some((technicians) =>
    technicians.hour_rate.includes(hourRateNumber)
  );
  if (found) {
    res.json(
      technicians.filter((technicians) => technicians.hour_rate.includes(hourRateNumber))
    );
  } else {
    res.status(400).json({
      msg: `No boiler type with the skill id of ${req.params.hour_rate}`,
    });
  }
});

//Get by daily capacity
router.get("/getByAttributeDailyCapacity/:daily_capacity", (req, res) => {
  const found = technicians.some(
    technical => technical.daily_capacity === parseInt(req.params.daily_capacity)
);
if(found){
    res.json(
        technicians.filter(
            technical => technical.daily_capacity === parseInt(req.params.daily_capacity)
        )
    );
} else {
    res
    .status(400)
    .json({msg: `Member not found ${req.params.daily_capacity} `});
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
