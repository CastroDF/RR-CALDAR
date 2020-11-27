var express = require("express");
const boilerTypes = require("../data/boiler-types.js");
const router = express.Router();

// getAllBoilerTypes
router.get("/", (req, res) => res.json(boilerTypes));

// getBoilerTypeById
router.get("/:id", (req, res) => {
  const found = boilerTypes.some(
    (boilerType) => boilerType.id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      boilerTypes.filter(
        (boilerType) => boilerType.id === parseInt(req.params.id)
      )
    );
    res.json(req.params.id);
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// deleteBoilerTypeById
router.get("/delete/:id", (req, res) => {
  const found = boilerTypes.some(
    (boilerType) => boilerType.id === parseInt(req.params.id)
  );
  if (found) {
    var index = boilerTypes
      .map((boilerType) => boilerType.id)
      .indexOf(parseInt(req.params.id));
    if (index !== -1) {
      boilerTypes.splice(index, 1);
      res
        .status(200)
        .json({ msj: `Member with id: ${req.params.id} was deleted` });
    }
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// getBoylerTypesBySkillId
router.get("/getBoilerTypesSkill/:skillsId", (req, res) => {
  const skillsIdNumber = parseInt(req.params.skillsId);
  const found = boilerTypes.some((boilerTypes) =>
    boilerTypes.skillsId.includes(skillsIdNumber)
  );

  if (found) {
    res.json(
      boilerTypes.filter((boilerTypes) =>
        boilerTypes.skillsId.includes(skillsIdNumber)
      )
    );
  } else {
    res.status(400).json({
      msg: `No boiler type with the skill id of ${req.params.skillsId}`,
    });
  }
});

// getBoilerTypesByStock
router.get("/getBoilerTypesStock/:stock", (req, res) => {
  const found = boilerTypes.some(
    (boilerType) => boilerType.stock === parseInt(req.params.stock)
  );
  if (found) {
    res.json(
      boilerTypes.filter(
        (boilerType) => boilerType.stock === parseInt(req.params.stock)
      )
    );
    res.json(req.params.stock);
  } else {
    res
      .status(400)
      .json({ msg: `No members with that stock: ${req.params.stock}` });
  }
});

module.exports = router;
