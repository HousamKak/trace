const db = require('../config/db.config');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
}

module.exports = authMiddleware;