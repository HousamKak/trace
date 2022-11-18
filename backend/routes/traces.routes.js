const { Router } = require('express');
const router = Router();
const { getAllUserTraces, getTrace, deleteTrace, addTrace } = require('../controllers/traces.controller');

router.get('/user/:user_id', getAllUserTraces);
router.delete('/', deleteTrace);
router.get('/:trace_id', getTrace);
router.post('/', addTrace);

module.exports = router;