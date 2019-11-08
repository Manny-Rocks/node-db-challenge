const express = require("express");
const server = express();

server.use(express.json());

const port = 2100;

server.listen(port, () => {
    console.log("Tuned in to 2100");
})

server.get("/", (req, res) => {
    res.send("We're in business folks");
}) 