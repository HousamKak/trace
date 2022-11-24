const db = require("../config/db.config");


// Optimization Note:
// The code here can be optimized by dividing the chests in the database into areas 
// and then only getting the chests in the area where the user is centrally located.
// This will reduce the amount of data that needs to be sent to the client.

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

const getUserChests = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query(
            "SELECT * FROM users_has_chests WHERE user_id = ?",
            [user_id],
            (err, rows) => {
                if (err) console.log(err);
                res.send(rows);
            }
        );
    }
}

module.exports = { getChest, getCloseChests, getUserChestsCount };