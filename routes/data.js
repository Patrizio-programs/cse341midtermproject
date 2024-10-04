const express = require('express')
const router = require('express').Router();


const dataController = require('../controllers/data');
router.get('/', dataController.getAllData)
router.post('/', dataController.addData)
router.get('/:id', dataController.getDataById)
router.put('/:id', dataController.updateData)
router.delete('/:id', dataController.deleteData)


module.exports = router