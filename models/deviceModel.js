const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    hardwareID: {
        type: String,
        unique: true,
        required: [true, 'Please fill device hardware ID']
    },
    hardwareModel: {
        type: String,
        enum: ['router', 'slave'],
        required: [true, 'Please fill device hardware model']
    },
    location: {
        type: [],
        default: [0, 0]
    }
});

const Device = mongoose.model('Device', deviceSchema);
module.exports = Device;
