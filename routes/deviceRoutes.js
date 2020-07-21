const express = require('express');
const router = express.Router();

const deviceHandle = require('./../device/deviceHandle');

router.post('/register', deviceHandle.register);
router.post('/changeName', deviceHandle.changeName);
router.delete('/delete', deviceHandle.delete);
router.get('/listDevice', deviceHandle.listDevice);
router.post('/changeLocation', deviceHandle.changeLocation);

module.exports = router