const { Router } = require('express');
const router = Router();
const { getAllUserTraces, getTrace, deleteTrace, addTrace, getCloseTraces } = require('../controllers/traces.controller');

router.get('/', getCloseTraces);
router.get('/user/:user_id', getAllUserTraces);
router.get('/:trace_id', getTrace);
router.post('/', addTrace);
router.delete('/', deleteTrace);

module.exports = router;