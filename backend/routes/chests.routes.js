const { Router } = require('express');
const router = Router();

const { getChest, getCloseChests, getUserChests } = require('../controllers/chests.controller');

router.get('/user/:user_id', getUserChests);
router.get('/:chest_id', getChest);
router.get('/', getCloseChests);

module.exports = router;