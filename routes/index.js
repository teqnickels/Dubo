var express = require('express');
var router = express.Router();

var allTasks = require('../db/db.js')

  /* GET home page. */
  router.get('/', function(request, response, next) {
    res.render('index', { title: 'Express'});
  });

  router.post('/create', (req, res) => {
    allTasks.create(req.body.task).then( () =>
      res.redirect('/')
    )
    .catch(error => res.json(error))
  })



module.exports = router;
