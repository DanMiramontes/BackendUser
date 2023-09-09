const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');


router.get('/',userController.show);

module.exports = router;