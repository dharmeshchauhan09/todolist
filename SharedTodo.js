const mongoose = require('mongoose');

const sharedTodoSchema = new mongoose.Schema({
    todoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Todo', required: true },
    sharedWith: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const SharedTodo = mongoose.model('SharedTodo', sharedTodoSchema);
module.exports = SharedTodo;
