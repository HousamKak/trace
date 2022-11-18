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

const usersRouter = require('./routes/users.routes');
app.use('/user', usersRouter);

const userSavesRouter = require('./routes/saves.routes');
app.use('/user/saves', userSavesRouter);

const userFriendsRouter = require('./routes/friends.routes');
app.use('/user/friends', userFriendsRouter);

const userScriptsRouter = require('./routes/scripts.routes');
app.use('/user/scripts', userScriptsRouter);

const userItemsRouter = require('./routes/items.routes');
app.use('/user/items', userItemsRouter);

const userMedalsRouter = require('./routes/medals.routes');
app.use('/user/medals', userMedalsRouter);

const chestsRouter = require('./routes/chests.routes');
app.use('/chests', chestsRouter);

app.listen(process.env.PORT, (err) => {
    if (err) { console.log(err); }
    console.log(`server running on port ${process.env.PORT}`);
});