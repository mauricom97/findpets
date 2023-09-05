var express = require('express');
var router = express.Router();
const pets = require('../controllers/pets/create')

/* GET users listing. */
router.post('/', pets);

module.exports = router;
