const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);

module.exports = router;