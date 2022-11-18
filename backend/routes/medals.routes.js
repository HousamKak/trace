const { Router } = require('express');
const router = Router();

const { getAllMedals } = require('../controllers/medals.controller');


router.get('/:user_id', getAllMedals);