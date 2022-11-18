const { Router } = require('express');
const router = Router();
const { getUser, updateUser, deleteUser } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, getUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;      