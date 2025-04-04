const Todo = require('../models/Todo');

// Example function to create a new todo item
exports.createTodo = async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json({ message: 'Todo created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Example function to get all todo items
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
