const { Router } = require('express');
const router = Router();

const { getAllScripts } = require('../controllers/scripts.controller');

router.get('/:user_id', getAllScripts);