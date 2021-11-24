const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// importing routes
const database = require('./database')
const noteRouter = require('./routes/note-routes')

// dotenv config
require('dotenv').config();

// app and por5t config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// DB connection
database.on('error', console.error.bind(console, 'MongoDB failed to connect'))


app.use('/', noteRouter)

// listening to port
app.listen(port, () => console.log(`Currently server is running at http://localhost:${port}`))