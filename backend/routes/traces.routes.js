const { Router } = require('express');
const router = Router();
const { getAllUserTraces, getTrace, deleteTrace } = require('../controllers/traces.controller');

router.get('/user/:user_id', getAllUserTraces);
router.delete('/', deleteTrace);

module.exports = router;