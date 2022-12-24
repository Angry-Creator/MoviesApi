const express = require("express");
const database = require("../database");

const router = express.Router();

module.exports = router.get("/random", (req, res) => {
    const randIndex = Math.floor(Math.random() * (database.length - 0) + 0);
    res.send(database[randIndex]);
});
