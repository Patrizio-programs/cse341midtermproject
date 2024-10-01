const mongodb = require('../routes/data/database.js')
const ObjectId = require('mongodb').ObjectId;


const getAllData = async (req, res) => {
    try {
        const data = await mongodb.getDb().db('cse341').collection('data').find();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllData }