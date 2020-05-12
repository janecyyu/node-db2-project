const express = require("express");
//const knex = require("knex");

const db = require("../data/dbConnection");
const router = express.Router();

router.get("/", (req, res) => {
  db("car-dealer") //table name
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("car-dealer")
    .insert(carData)
    .then((ids) => {
      db("car-dealer")
        .where({ id: ids[0] })
        .then((newCar) => {
          res.status(201).json(newCar);
        });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  db("car-dealer")
    .where({ id: req.params.id })
    .update(changes)
    .then((newCar) => {
      res.status(200).json(newCar);
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
