const db = require('../config/db.config')
const getAllFriends = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query('SELECT * FROM users WHERE user_id IN(select friend_user_id from friends where user_id = ?)', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.send(rows);
        })
    }
}

const addFriend = (req, res) => { }

const deleteFriend = (req, res) => { }

module.exports = { getAllFriends, deleteFriend, addFriend }