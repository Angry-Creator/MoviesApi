const express = require("express");
const cors = require("cors");
const PORT = 5000 || process.env.PORT;

const App = express();

App.use(cors());

App.get("", (req, res)=>{
    res.send("Hello");
    console.log("Working");
});

App.listen(PORT, () => {
    console.log("Listening at PORT: ", PORT);
});
