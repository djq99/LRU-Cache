const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
const LRUCache = require("./LRUCache");
const cache = new LRUCache(2);

server.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Server is running",
    });
});


server.get("/api/v1/get/:key", (req, res) => {
   const key = req.params.key;
   const value = cache.get(key);
   if(value !== -1){
       res.json({
           key,
           value
       })
   }
   else{
       res.status(404).json();
   }
});

server.put("/api/v1/put/:key", (req, res) => {
    const key = req.params.key;
    const value = req.body.value;
    const obj = cache.put(key, value);
    res.json(obj);
 });

const listener = server.listen(port, () => {
    console.log(`HTTP server is listening at port ${listener.address().port}`);
});

module.exports = server;