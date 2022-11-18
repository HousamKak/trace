const express = require('express');
const bodyParser = require('body-parser');


require('dotenv').config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes)

app.listen(process.env.PORT, (err) => {
    if (err) { console.log(err); }
    console.log(`server running on port ${process.env.PORT}`);
});