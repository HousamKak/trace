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

const updateUser = async (req, res) => { }

const deleteUser = (req, res) => { }

module.exports = { getUser, updateUser, deleteUser }