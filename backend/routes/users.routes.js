const { Router } = require('express');
const router = Router();
const { getUser, updateUser, deleteUser } = require('../controllers/users.controller');