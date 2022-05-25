require("dotenv").config({ path: __dirname + '/.env', debug: true });
const express = require('express');
// const path = require('path');
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
const matchesRouter = require('./routes/matches');
const filtersRouter = require('./routes/filters');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))



app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors({ origin: 'http://localhost:3002', methods: 'GET, POST', credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log("HELLOOOOOOOOOO");
const BUILD_PATH = path.resolve('../client/build');
//serve static files from front end build folder
app.use(express.static(BUILD_PATH));
app.get('/', (req, res) => {
  filePath = BUILD_PATH + '/index.html'
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  }
  else {
    res.statusCode = 404;
    res.write('404 sorry not found');
    res.end();
  }
})



// app.use('/', indexRouter);
app.use('/users', usersRouter(db, dbQueries));
app.use('/messages', messagesRouter(db));

app.use('/therapists', therapistsRouter(db, dbQueries));
app.use('/matches', matchesRouter(db, dbQueries));
app.use('/filters', filtersRouter(db, dbQueries));

app.get('/api/profile', (req, res) => {
  if (req.session.id) {
    const user_id = req.session.id
    const command = "SELECT * from users where id = $1; "
    values = [user_id]
    db.query(command, values).then(data => {
      return res.json(data.rows[0]);
    })
  } else {
    return res.status(400).send("No user info")
  }
})




module.exports = app;