const { Router } = require('express');
const router = Router();

const { getAllSaves, addSave, deleteSave } = require('../controllers/saves.controller');

router.get('/:user_id', getAllSaves);
router.post('/', addSave);
router.delete('/', deleteSave);