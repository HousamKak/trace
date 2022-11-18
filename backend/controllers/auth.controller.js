const db = require('../config/db.config')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users where email = ?', [email], (err, rows) => {
        if (err) console.log(err);
        if (rows[0]) {
            const user = rows[0];
            bcrypt.compare(password, user.password, (err, isValid) => { });
        }
        else {
            res.json({ message: "Not Registered" })
        }
    });

};