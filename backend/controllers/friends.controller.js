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

const addFriend = (req, res) => {
    const { user_id, friend_user_id } = req.body;
    if (user_id) {
        db.query('INSERT INTO friends (user_id, friend_user_id) VALUES (?, ?)', [user_id, friend_user_id], (err, rows) => {
            if (err) console.log(err);
            res.status(200).send("friend added");
        })
    }
}

const deleteFriend = (req, res) => {
    const { user_id, friend_user_id } = req.body;
    db.query('DELETE FROM friends WHERE user_id = ? AND friend_user_id =?', [user_id, friend_user_id], (err, rows) => {
        if (err) console.log(err);
        res.status(200).json({ message: "friend deleted" });
    })
}

module.exports = { getAllFriends, deleteFriend, addFriend }