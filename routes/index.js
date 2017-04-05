var express = require('express');
var router = express.Router();
var db = require('/Users/leah/Desktop/LG projects 2/Dubo/db/db.js');


  /* GET home page. */
  router.get('/', function(request, response, next) {
    res.render('index', { title: 'Express'});
  });

  router.post('/create',(request, response, next)=> {
    const body = request.body
    console.log(body);
    db.create(body)

    .then( () =>{
      res.render('index', { title: 'Dubo'})
    })
  })



// router.post('/create-project', (req, res) => {
//   Projects.create(req.body.project, currentRank).then(value => {
//     console.log(req, req.body);
//     currentRank++
//     res.redirect('/')
//   })
// })
module.exports = router;
