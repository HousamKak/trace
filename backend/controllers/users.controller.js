const db = require('../config/db.config');
const bcrypt = require("bcrypt");

const getUser = (req, res) => {
    const { user_id } = req.user;
    if (user_id) {
        db.query('SELECT * FROM users where user_id = ?', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.status(200).json(rows);
        })
    }
}

const updateUser = async (req, res) => {
    const { user_id, name, email, password } = req.body;
    if (user_id) {
        if (name) {
            db.query('UPDATE users SET username = ? WHERE user_id = ?', [name, user_id])
        }
    }
}

const deleteUser = (req, res) => {
    const { user_id } = req.body;
    if (user_id) {
        db.query('DELETE FROM users WHERE user_id = ?', [user_id])
        res.status(200).json({ message: "User deleted" });
    }
}

module.exports = { getUser, updateUser, deleteUser }