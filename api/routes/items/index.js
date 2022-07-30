const express = require('express');
const router = express.Router();

const { getItemsByQuery, getItemById } = require('../../controllers/items');
router.get('', getItemsByQuery);
router.get('/:id', getItemById);

module.exports = router;
