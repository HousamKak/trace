const db = require('../config/db.config')

const getAllItems = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query('SELECT * FROM items WHERE item_id IN(select item_id from chests_has_items where chest_id IN(select chest_id from users_has_chests where user_id = ?))', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.send(rows);
        })
    }
}

module.exports = { getAllItems }