const { Router } = require('express');
const router = Router();

const { getChest, getCloseChests } = require('../controllers/chests.controller');