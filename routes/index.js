const router = require('express').Router();
const mongodb = require('./data/database');

router.get('/', (req, res) => {res.send('This is the home page for the midterm project!')});


//connect data
router.use('/data', require('./data.js'));

//init db
mongodb.initDb((err) => {
    if (!err) {
        console.log('Database initialized');
    }
});


module.exports = router
