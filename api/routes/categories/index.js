const express = require('express');
const router = express.Router();

const { getCategoryById } = require('../../controllers/categories');
router.get('/:id', getCategoryById);

module.exports = router;
