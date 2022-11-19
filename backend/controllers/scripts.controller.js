const db = require('../config/db.config')
const getAllScripts = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query('SELECT * FROM scripts WHERE script_id IN(select script_id from chests_has_scripts where chest_id IN(select chest_id from users_has_chests where user_id = ?))', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.send(rows);
        })
    }
}

module.exports = { getAllScripts }