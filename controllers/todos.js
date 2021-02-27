const db = require('../models');

const index = (req, res)=> {
  db.Todo.find({}, (err, foundTodos) => {
    if (err) console.log(err)
    res.json(foundTodos)
  });
}

const show = (req, res) => {
    db.Todo.findById(req.params.id, (err, foundTodo) => {
        if (err) console.log('Error in games#show:', err);
        res.json(foundTodo);
    });
};

const create = (req, res) => {
    db.Todo.create(req.body, (err, savedTodo) => {
        if (err) console.log('Error in games#create:', err);
        res.json(savedTodo)
    });
};

const update = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTodo) => {
        if (err) console.log('Error in games#update:', err);
        res.json(updatedTodo)
    });
};

const destroy = (req, res) => {
    db.Todo.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
        if (err) {
          console.log('Error in games#destroy:', err);
        } else {
          res.sendStatus(200)
          console.log(deletedTodo)
        }
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
