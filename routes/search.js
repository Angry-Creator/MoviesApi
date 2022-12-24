const express = require("express");
const database = require("../database");

const router = express.Router();

module.exports = router.get("/search", (req, res) => {
    res.end();
});
