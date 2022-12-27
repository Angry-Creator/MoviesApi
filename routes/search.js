const express = require("express");
const database = require("../database");

const router = express.Router();

module.exports = router.get("/search/:item", (req, res) => {
    let movieList = [];
    let searchItem = req.params.item;
    for(let i = 0; i < database.length; i++){
        let eachMovieTitle = (database[i].title).toLowerCase();
        if(eachMovieTitle.includes(searchItem.toLowerCase())){
            movieList.push(database[i]);
        }
    }
    res.status(200).json({result: movieList});
});
