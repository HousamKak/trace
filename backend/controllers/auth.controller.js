const db = require('../config/db.config')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users where email = ?', [email], (err, rows) => { });

};