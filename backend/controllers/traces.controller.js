const db = require("../config/db.config");

const getAllUserTraces = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query(
            "SELECT * FROM traces WHERE user_id = ?",
            [user_id],
            (err, rows) => {
                if (err) console.log(err);
                res.send(rows);
            }
        );
    }
}

const deleteTrace = (req, res) => { }

module.exports = { getAllUserTraces, deleteTrace };