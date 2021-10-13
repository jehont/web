if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const User = require('./models/user')
const app = express()
const passport = require('passport')
const { checkNotAuthenticated, checkAuthenticated } = require ('./passport-config')

const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

const { initialize: initializePassport } = require('./passport-config')
initializePassport(
  passport,
  async function (email) {
    const user = await User.findOne({ email })
    return user
  },
  async function (id) {
    const user = await User.findOne({ _id: id })
    return user
  }
)

const usersRouter = require('./routes/users')

app.use(express.static(__dirname + '/public'));
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
// ==== Использовать роутер и редирект на / ====
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started on http://localhost:${port}`))