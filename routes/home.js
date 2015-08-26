var express = require('express')
  , router = express.Router()
  , controllers = require('../controllers')

router
  .get('/', function(req,res){
    res.send('sisegame backend');
  })

module.exports = router;
