const db = require('../config/db.config');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET_KEY);
    }
    else { res.json({ message: "Unauthorized" }) }
}

module.exports = authMiddleware;