const express = require("express");
const router = express.Router();
const players = require("../data/players");

// getAllPlayers
router.get("/players", function (req, res) {
  res.json(players);
});

// getPlayerById
router.get("/players/:id", (req, res) => {
  const found = players.some((player) => player.id === parseInt(req.params.id));

  if (found) {
    res.json(players.filter((player) => player.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No boiler type with the id of ${req.params.id}` });
  }
});

module.exports = router;
