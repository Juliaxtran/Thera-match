const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./configs/db.config');
const cors = require('cors');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dbQueries = require('./routes/helpers.js');
const messagesRouter = require('./routes/messages');
const therapistsRouter = require('./routes/therapists');


const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors({origin: 'http://localhost:3000', methods: 'GET, POST', credentials: true}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/users', usersRouter(db, dbQueries));
app.use('/messages', messagesRouter(db));
app.use('/therapists', therapistsRouter(db, dbQueries));


module.exports = app;
