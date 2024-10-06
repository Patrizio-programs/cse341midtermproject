const mongodb = require('../routes/data/database.js')
const ObjectId = require('mongodb').ObjectId;
const { getDatabase } = require('../routes/data/database');

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


const getDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await mongodb
            .getDatabase()
            .db()
            .collection('football')
            .find({ _id: ObjectId(id) });
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Post
const addData = async (req, res) => {
    const id = new ObjectId(req.params.id);

    const datafields ={
        name: req.body.name,
        position: req.body.position,
        birthday: req.body.birthday,
        club: req.body.club,
        foot: req.body.foot
    };
    if (!datafields.name) {
        res.status(400).json({ message: 'Name is required' });
        return;
    }
    try {
        const response = await getDatabase().db().collection('football').insertOne(datafields);
        res.status(201).json(response.insertedId);
    } catch (error) {
        res.status(500).json({ message: 'Error creating player', error: error.message });
    }
}

//PUT
const updateData = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const datafields ={
        name: req.body.name,
        position: req.body.position,
        birthday: req.body.birthday,
        club: req.body.club,
        foot: req.body.foot
    };
    try {
        const result = await mongodb.getDatabase().db().collection('football').updateOne({ _id: userId }, { $set: datafields });
        if (result.modifiedCount === 0) {
            res.status(404).json({ message: 'Player not found' });
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating player', error: err.message });
    }
}


//Delete
const deleteData = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    try {
        const result = await mongodb
            .getDatabase()
            .db()
            .collection('football')
            .deleteOne({ _id: userId }, true);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllData, getDataById, addData, updateData, deleteData }