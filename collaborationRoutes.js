const express = require('express');
const { shareTodo, getSharedTodos } = require('../controllers/collaborationController');

const router = express.Router();

router.post('/share', shareTodo);
router.get('/shared', getSharedTodos);

module.exports = router;
