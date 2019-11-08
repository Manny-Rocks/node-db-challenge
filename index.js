const express = require("express");
const server = express();
const resourceRoute = require("./routes_models/resource-routes");

server.use(express.json());

server.use("/api/resources", resourceRoute);

const port = 2100;

server.listen(port, () => {
    console.log("  ***  Tuned in to 2100  ***");
})

server.get("/", (req, res) => {
    res.send("We're in business folks");
}) 