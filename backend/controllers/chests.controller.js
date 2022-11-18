const db = require("../config/db.config");

const getCloseChests = (req, res) => {
    db.query(
        "SELECT chest_id,x_position,y_position FROM chests",
        (err, rows) => {
            if (err) console.log(err);
            res.send(rows);
        }
    );
}

const getChest = (req, res) => { }

module.exports = { getChest, getCloseChests };