const { Router } = require('express');
const router = Router();
const { getAllUserTraces } = require('../controllers/traces.controller');

router.get('/user/:user_id', getAllUserTraces);

module.exports = router;