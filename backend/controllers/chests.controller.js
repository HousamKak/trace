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

const getChest = (req, res) => {
    const { chest_id } = req.params;
    if (chest_id) {
        db.query(
            "SELECT * FROM chests WHERE chest_id = ?",
            [chest_id],
            (err, rows) => {
                if (err) console.log(err);
                res.send(rows);
            }
        );
    }
}

module.exports = { getChest, getCloseChests };