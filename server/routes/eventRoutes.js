'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

// const {getAccounts} = eventController;

// router.get('/accounts', eventController.getAccounts);
router.get('/accounts/:id', eventController.getAccountsByPhone);

module.exports = {
    routes: router
}