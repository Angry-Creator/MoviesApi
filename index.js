const express = require("express");
const cors = require("cors");
const randomRoute = require("./routes/random");
const listRoute = require("./routes/list");
const searchRoute = require("./routes/search");
const PORT = 5000 || process.env.PORT;

const App = express();

App.use(cors());

App.all("/", (req, res) => {
    res.status(200).end();
});

App.use(randomRoute);
App.use(listRoute);
App.use(searchRoute);

App.all("*", (req, res) => {
    res.status(404).end("404 Error");
});

App.listen(PORT, () => {
    console.log("Listening at PORT: ", PORT);
});
