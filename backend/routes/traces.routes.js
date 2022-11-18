const { Router } = require('express');
const router = Router();
const { getAllUserTraces, getTrace, deleteTrace } = require('../controllers/traces.controller');

router.get('/user/:user_id', getAllUserTraces);
router.delete('/', deleteTrace);
router.get('/:trace_id', getTrace);

module.exports = router;