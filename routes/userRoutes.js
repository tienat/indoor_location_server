const express = require('express');
const router = express.Router();

const authHandle = require('../auth/authHandle');
const userHandle = require('../auth/userHandle');

router.post('/signup', authHandle.signup);
router.post('/login', authHandle.login);

router.use(authHandle.protect);
router.put('/changeActive', userHandle.changeActive);

module.exports = router