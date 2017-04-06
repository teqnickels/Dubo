var express = require('express');
var router = express.Router();

var allTasks = require('../db/db.js')

  /* GET home page. */
  router.get('/', function( request, response ) {
    allTasks.showAll().then(task => {
      console.log(task)
      response.render('index', {
        title: 'To Do List',
        allTasks: task
      })
    })
    .catch(error => response.json(error))
  })

  router.post('/create', (request, response) => {
    allTasks.create(request.body.task).then( () =>
      response.redirect('/')
    )
    .catch(error => response.json(error))
  })

  router.post('/allTasks/:id/deleteTask',(request,response) => {
    allTasks.deleteTask(request.params.id).then( () =>
      response.redirect('/')
    )
    .catch(error => response.json(error))
  })

   router.post('/allTasks/:id/edit',(request,response) => {
     allTasks.edit( request.body.task, request.params.id ).then( () =>
      response.redirect('/')
    )
    .catch(error => response.json(error))
   })

   router.post('/allTasks/:id/completed',(request,response) => {
     console.log('HEEEEEEEEEERRRE',request.body);
     const isCompleted = request.body.completed === 'on' ? true : false
     console.log('IDDDDDD',request.params.id);
     allTasks.completed(isCompleted,parseInt(request.params.id)).then( () =>
       response.redirect('/')
     )
     .catch(error => response.json(error))
   })

module.exports = router;
