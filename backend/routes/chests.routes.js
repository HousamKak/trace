const { Router } = require('express');
const router = Router();

const { getChest, getCloseChests, getUserChestsCount } = require('../controllers/chests.controller');

router.get('/:chest_id', getChest);
router.get('/', getCloseChests);

module.exports = router;