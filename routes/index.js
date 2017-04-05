var express = require('express');
var router = express.Router();

var allTasks = require('../db/db.js')

  /* GET home page. */
  router.get('/', function( request, response ) {
    allTasks.showAll().then(task => {
      response.render('index', {
        title: 'To Do List',
        allTasks: allTasks
      })
    })
    .catch(error => res.json(error))
  })

  router.post('/create', (request, response) => {
    allTasks.create(request.body.task).then( () =>
      response.redirect('/')
    )
    .catch(error => response.json(error))
  })

//write a function that loops through the object alltasks
//and returns the value here
//pass that value into the object at literal in render

module.exports = router;
