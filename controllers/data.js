const mongodb = require('../routes/data/database.js')
const ObjectId = require('mongodb').ObjectId;


const getAllData = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().db().collection('football').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllData }