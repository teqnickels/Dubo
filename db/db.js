const pgPromise = require("pg-promise")
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/dubo`)

const create = 'INSERT INTO todolist (title) VALUES ($1) RETURNING *'
const deleteTask = 'DELETE FROM todolist WHERE id = $1'
const showAll = 'SELECT * FROM todolist ORDER BY priority'
const edit = 'UPDATE todolist SET title = ($1) WHERE id = ($2) RETURNING *'
const completed = 'UPDATE todolist SET complete = $1 WHERE ID = $2 RETURNING *'

const allTasks = {
  create: ( title ) => {
    return db.oneOrNone( create, title )
  },

  deleteTask: ( id ) => {
    return db.none( deleteTask, [id] )
  },

  showAll: ( id ) => {
    return db.any( showAll, [id] )
  },

  edit: ( title, id ) => {
    return db.one( edit, [title, id] )
  },

  completed: ( isCompleted, id ) => {
    console.log('isCompleted:', isCompleted, 'id: ', id);
    return db.one( completed, [isCompleted, id ])
  }

}



module.exports = allTasks
