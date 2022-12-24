const express = require("express");
const cors = require("cors");
const randomRoute = require("./routes/random");
const listRoute = require("./routes/list");
const PORT = 5000 || process.env.PORT;

const App = express();

App.use(cors());

App.use(randomRoute);
App.use(listRoute);

App.all("*", (req, res)=>{
    res.status(404).end("404 Error");
});

App.listen(PORT, () => {
    console.log("Listening at PORT: ", PORT);
});
