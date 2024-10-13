const express = require('express')
const router = require('express').Router();


const dataController = require('../controllers/data');
const isAuthenticated = require('../middleware/Authenticate');
router.get('/', dataController.getAllData)
router.post('/', isAuthenticated, dataController.addData)
router.get('/:id', dataController.getDataById)
router.put('/:id', isAuthenticated, dataController.updateData)
router.delete('/:id', isAuthenticated, dataController.deleteData)


module.exports = router