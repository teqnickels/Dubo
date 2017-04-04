var express = require('express');
var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
  });

  router.post('/create', (req, res) => {
    allTasks.create(req.body.params).then( () =>
      res.redirect('/')
    )
    .catch(error => res.json(error))
  })

  // router.get('/', function(req, res, next) {
  //   allTasks.showAll().then(todolist => {
  //     res.render('index', {
  //       title: 'Dubo',
  //       task: todolist
  //     }).catch(error => next(error))
  //   })
  // })
  //
  //
module.exports = router;
