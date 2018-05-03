const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());


// Use the express app to serve both the bundled frontend assets
// (through webpack middleware) and APIs.

app.use(express.static('public'))

app.post("/connection", function (req, res) {
  var newUser = {
    id: todoId.toString(),
    title: req.body.title,
    content: req.body.content
  };
  console.log(newUser);
});

app.post("/login", (req,res) =>  {
  res.send({message :`Hello : ${req.body.email}`});
});


app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
