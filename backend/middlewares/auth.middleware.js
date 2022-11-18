const db = require('../config/db.config');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) { }
    else { res.json({ message: "Unauthorized" }) }
}

module.exports = authMiddleware;