const db = require('./models');

const todos = [{ body: 'Create backend', completed: true}, { body: 'Deploy', completed: false}]

db.Todo.deleteMany({}, (err, deletedTodos) => {
  db.Todo.create(todos, (err, seededTodos) => {
    if (err) console.log(err);
    console.log(seededTodos.length + ' todos seeded')
    process.exit()
  })
});

