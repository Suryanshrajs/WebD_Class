var express = require("express");
var app = express();

app.use("/", express.static("./frontend")) // from where ew will get files

app.listen(8081) //port number which i am assigining