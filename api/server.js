const express = require("express");
const helmet = require("helmet");
const server = express();
const carsRouter = require("../cars/cars_router");

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
