require('dotenv').config()
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');
const express = require('express');
// const axios = require('axios');
const app = express();


const {
    SESSION_SECRET,
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env;

app.use(bodyParser.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(CONNECTION_STRING).then(dbInstance=> {
    app.set('db', dbInstance);
    console.log('Database Connected')
}).catch(err => console.log(err));



//Endpoints

// let c = controller;

//Get all players into the players array in the leaderboard state

app.get('/api/getPlayers', controller.getPlayers);

app.listen(SERVER_PORT, () => {console.log(`Server ${SERVER_PORT} is running`); })