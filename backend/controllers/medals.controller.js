const db = require('../config/db.config')
const getAllMedals = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query('SELECT * FROM medals WHERE medal_id IN(select medal_id from chests_has_medals where chest_id IN(select chest_id from users_has_chests where user_id = ?))', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.send(rows);
        })
    }
}

module.exports = { getAllMedals }