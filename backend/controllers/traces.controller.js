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

const deleteTrace = (req, res) => {
    const { trace_id } = req.body;
    db.query(
        "DELETE FROM traces WHERE trace_id = ?",
        [trace_id],
        (err, rows) => {
            if (err) console.log(err);
            res.status(200).json({ message: "Trace deleted" });
        }
    );
}

const getTrace = (req, res) => { }

module.exports = { getAllUserTraces, deleteTrace, getTrace };