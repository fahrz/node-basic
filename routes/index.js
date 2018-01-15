const express = require('express');
const router  = express.Router();

router.get('/', function(req, res){
  res.json({message: "Selamat datang di NodeJS!"});
});

router.get('/users', function(req, res){
  
});

module.exports = router;