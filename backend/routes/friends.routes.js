const { Router } = require('express');
const router = Router();

const { getAllFriends, addFriend, deleteFriend } = require('../controllers/friends.controller');