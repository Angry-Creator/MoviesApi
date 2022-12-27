const express = require("express");
const database = require("../database");

const router = express.Router();

module.exports = router.get("/list/:id", (req, res) => {
    const listValue = [];
    const pageNumber = req.params.id;
    if (pageNumber != NaN && pageNumber != 0) {
        const startCount = (pageNumber == 1) ? 0 : ((pageNumber - 1) * 10);
        const limit = (pageNumber == 1) ? 10 : (pageNumber * 10);
        for (let i = startCount; i < limit; i++) {
            if (i < database.length) {
                listValue.push(database[i]);
            }
        }
        res.status(200).json({result: listValue});
    } else {
        res.status(404).end("Page Number is either invalid or 0");
    }
});
