
const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser")

const pets = require('./pets')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET home page. */
module.exports = (app) => {
  app.use("/pets", jsonParser, urlencodedParser, pets)
}
