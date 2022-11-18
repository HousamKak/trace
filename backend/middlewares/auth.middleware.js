const db = require('../config/db.config');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET_KEY);
        db.query('SELECT user_id FROM users where email = ?', [decoded.email], (err, rows) => {
            if (err) console.log(err);
            if (rows[0]) {
                req.user = rows[0];
                next();
            }
        })
    }
    else { res.json({ message: "Unauthorized" }) }
}

module.exports = authMiddleware;