const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
var models = require('./models')

var app = express();
app.use(bodyParser.json());
app.use(cors());


// Use the express app to serve both the bundled frontend assets
// (through webpack middleware) and APIs.

app.use(express.static('public'))


app.post("/commands", function(req,res){

  models.Command.findAll({
    where: {idCustomer : req.body.id},
    include: [{model: models.Product}]
  }).then((data) => {
    res.send({info: data});
  }).catch((err) => {
    console.log(err);
    res.status(403).send({'error' : err});
  });
});

app.post("/order", function(req, res){

  var batch = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  var command = req.body.data;
  command.forEach(item => {
    item.batch = batch
  });
  models.Command.bulkCreate(command)
        .then(function(data) {
          console.log("command added ! : " + data);
          res.send({info: data});
        })
        .catch(function(err){
          res.status(403).send({'error' : err});
        });

});

app.post("/products", function(req, res){

  var product = {
    search: req.body.search,
    filter: req.body.filter
  };
  models.Product.findAll({
    attributes: ['id', 'image_url', 'name', 'price', 'category']
  }).then((data) => {
      res.send({info: data});
  }).catch((err) => {
    res.status(403).send({'error' : err});
  });
  
});

app.post("/login", function (req, res) {
  var userData = {
    email: req.body.email,
    password: req.body.pass
  };
  // check if login exists :
  models.User.findOne({
    attributes: ['id', 'email', 'name'],
    where: {email : userData.email, password: userData.password}
  }).then((data) => {
    if(data)
      res.send({info: data});
    else
      res.status(403).send({'error' : "Please check email or password"});
  }).catch((err) => {
    res.status(403).send({'error' : err});
  });
});

app.post("/register", (req,res) =>  {
  var userData = {
    email: req.body.email,
    password: req.body.pass,
    name: req.body.name
  };
  // check if login exists :
  models.User.findOne({
    attributes: ['email', 'name'],
    where: {email : userData.email}
  }).then(function(userFound){
    if(!userFound){
      //add user in database
      var newUser = models.User.create(userData)
        .then(function(data) {
          console.log("Account added ! : " + data.email);
          res.send({info: data});
        })
        .catch(function(err){
          console.log(err);
        });
    }
    else{
      res.status(403).send({'error' : "Email or pseudo already exists !"});
    }
  })
  .catch(function(err){
    console.log(err);
  });

});


app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
