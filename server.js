const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const GithubStrategy = require('passport-github2').Strategy
require('dotenv').config();

app.use(bodyParser.json())
app.use(session({
    secret: '123456789',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile)
}));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/', (req, res) => { res.send(req.session.user != undefined ? `Logged in as ${req.session.user.displayName}` : 'Logged out') });

app.get('/github/callback', passport.authenticate('github', { failureRedirect: '/api' }), (req, res) => {
    req.session.user = req.user
    res.redirect('/');
})
app.use('/', require('./routes/index.js'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
