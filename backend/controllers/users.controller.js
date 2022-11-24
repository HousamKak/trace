const db = require('../config/db.config');
const bcrypt = require("bcrypt");

const getUser = (req, res) => {
    const { user_id } = req.user;
    if (user_id) {
        db.query('SELECT * FROM users where user_id = ?', [user_id], (err, rows) => {
            if (err) console.log(err);
            res.status(200).json(rows);
        })
    }
}

const updateUser = async (req, res) => {
    const { user_id, username, email, password, profile } = req.body;
    if (user_id) {
        if (username) {
            db.query('UPDATE users SET username = ? WHERE user_id = ?', [username, user_id])
        }
        if (email) {
            db.query('UPDATE users SET email = ? WHERE user_id = ?', [email, user_id])
        }
        if (password) {
            const hashed_password = await bcrypt.hash(password, 10);
            db.query('UPDATE users SET password = ? WHERE user_id = ?', [hashed_password, user_id])
        }
        if (profile) {
            const folderName = "./media/" + user_id + "/profile";
            fs.access(folderName, (err) => {
                if (err) {
                    console.log("Folder does not exist. Creating folder...");
                    fs.mkdirSync(folderName)
                    console.log("Folder created.");
                }
            })
            const buf = Buffer.from(profile, 'base64');
            fileDir = folderName + "/" + user_id + ".profilePicture.png";
            db.query('UPDATE users SET profile = ? WHERE user_id = ?', [profile, user_id])
        }
        res.status(200).json({ message: "User updated" });
    }
}

const deleteUser = (req, res) => {
    const { user_id } = req.body;
    if (user_id) {
        db.query('DELETE FROM users WHERE user_id = ?', [user_id])
        res.status(200).json({ message: "User deleted" });
    }
}

module.exports = { getUser, updateUser, deleteUser }