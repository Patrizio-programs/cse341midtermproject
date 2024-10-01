const router = require('express').Router();


router.get('/', (req, res) => {res.send('This is the home page for the midterm project!')});


//get data
router.use('/data', require('./data.js'));

module.exports = router
