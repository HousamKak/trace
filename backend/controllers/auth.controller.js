const db = require('../config/db.config')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users where email = ?', [email], (err, rows) => {
        if (err) console.log(err);
        if (rows[0]) {
            const user = rows[0];
            bcrypt.compare(password, user.password, (err, isValid) => {
                if (err) console.log(err);
                if (isValid) {
                    const token = jwt.sign({ email: user.email, name: user.username }, process.env.JWT_SECRET_KEY);
                    res.status(200).json({ token, user, message: "Login Successful" });
                } else {
                    res.json({ message: "Invalid Credentials" });
                }
            });
        }
        else {
            res.json({ message: "Not Registered" })
        }
    });
};

const signup = async (req, res) => {
    const { username, email, password, dob } = req.body;
};

module.exports = { login };