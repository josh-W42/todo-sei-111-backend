const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    body: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
