require('dotenv').config()
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');
const app = express();


const {
    SESSION_SECRET,
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(CONNECTION_STRING).then(dbInstance=> {
    app.set('db', dbInstance);
    console.log('Database Connected')
}).catch(err => console.log(err));

app.use(bodyParser.json())


//Endpoints

app.listen(SERVER_PORT, () => {console.log(`Server ${SERVER_PORT} is running`); })