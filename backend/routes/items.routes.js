const { Router } = require('express');
const router = Router();
const { getAllItems } = require('../controllers/items.controller');

router.get('/:user_id', getAllItems);

module.exports = router;