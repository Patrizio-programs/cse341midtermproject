const express = require('express')
const router = require('express').Router();


const dataController = require('../controllers/data');
router.get('/', dataController.getAllData)


module.exports = router