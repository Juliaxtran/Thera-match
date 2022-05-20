const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./configs/db.config');
const cors = require('cors');
const cookieSession = require('cookie-session');
const server = require('./bin/www');
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: ["GET","POST"]
  }
});

const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dbQueries = require('./routes/helpers.js');
const messagesRouter = require('./routes/messages');
const therapistsRouter = require('./routes/therapists');
const matchesRouter = require('./routes/matches');
const filtersRouter = require('./routes/filters');


const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))



app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors({ origin: '*', methods: 'GET, POST', credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
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
    console.log("No sessions")
    return res.status(400).send("No user info")
  }
})

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.ion('disconnect', () => {
    socket.broadcast.emit('callended');
  })

  socket.on("calluser", ({userToCall, signalData, from, name}) => {
    io.to(userToCall).emit("calluser", {signal: signalData, from, name});
  })
  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  })
});

module.exports = app;