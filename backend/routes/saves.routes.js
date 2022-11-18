const { Router } = require('express');
const router = Router();

const { getAllSaves, addSave, deleteSave } = require('../controllers/saves.controller');