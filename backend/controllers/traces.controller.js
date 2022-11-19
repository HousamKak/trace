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

const getTrace = (req, res) => {
    const { trace_id } = req.params;
    if (trace_id) {
        db.query(
            "SELECT * FROM traces WHERE trace_id = ?",
            [trace_id],
            (err, rows) => {
                if (err) console.log(err);
                res.send(rows);
            }
        );
    }
}

const addTrace = (req, res) => {
    const { user_id, file_type, file, title, description, x_position, y_position } = req.body;
    db.query(
        "INSERT INTO traces (user_id,file_type,file,title,description,x_position,y_position) VALUES (?,?,?,?,?,?,?)",
        [user_id, file_type, file, title, description, x_position, y_position],
        (err, rows) => {
            if (err) console.log(err);
            res.status(200).json({ message: "Trace added" });
        }
    );
}

// Optimization Note:
// The code here can be optimized by dividing the traces in the database into areas 
// and then only getting the traces in the area where the user is centrally located.
// This will reduce the amount of data that needs to be sent to the client.
const getCloseTraces = (req, res) => {
    db.query("SELECT trace_id,file_type,x_position,y_position FROM traces", (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
    }
    );
}

module.exports = { getAllUserTraces, deleteTrace, getTrace, addTrace, getCloseTraces };