const express = require('express');
const bodyParser = require('body-parser');


require('dotenv').config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
