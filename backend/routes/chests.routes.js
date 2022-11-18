const { Router } = require('express');
const router = Router();

const { getChest, getCloseChests } = require('../controllers/chests.controller');

router.get('/:chest_id', getChest);
router.get('/', getCloseChests);