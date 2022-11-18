const db = require('../config/db.config')

const getAllSaves = (req, res) => {
    const { user_id } = req.params;
    if (user_id) {
        db.query('SELECT * FROM traces WHERE trace_id IN (select saved_trace_id from saves where user_id = ?);', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.json(rows);
        })
    }
}

const deleteSave = (req, res) => {
    const { user_id, trace_id } = req.body;
    db.query('DELETE FROM saves WHERE user_id = ? AND saved_trace_id =? ', [user_id, trace_id], (err, rows) => {
        if (err) console.log(err);
        res.status(200).json({ message: "Save deleted" });
    })
}

const addSave = (req, res) => { }

module.exports = { getAllSaves, deleteSave, addSave }