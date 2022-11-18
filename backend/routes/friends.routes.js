const { Router } = require('express');
const router = Router();

const { getAllFriends, addFriend, deleteFriend } = require('../controllers/friends.controller');

router.get('/:user_id', getAllFriends);
router.post('/', addFriend);
router.delete('/', deleteFriend);

module.exports = router;
