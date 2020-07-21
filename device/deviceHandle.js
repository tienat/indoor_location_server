const Device = require('../models/deviceModel');
const AppError = require('./../utils/appError');

exports.register = async (req, res, next) => {
    try {
        const device = await Device.create({
            name: req.body.name ? req.body.name : req.body.hardwareID,
            hardwareID: req.body.hardwareID,
            hardwareModel: req.body.hardwareModel
        });

        res.status(200).json({
            status: 'success',
            data: {
                device
            }
        });

    } catch (err) {
        next (err)
    }
}

exports.changeName = async (req, res, next) => {
    try {
        const {
            hardwareID,
            name
        } = req.query;
        
        await Device.updateOne({hardwareID: hardwareID}, {$set: {name: name}}, function (err,res) {
            if (err) {
                next (err)
            }
        });

        res.status(200).json({
            status: 'success',
        });

    } catch (err) {
        next (err)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const {
            hardwareID,
        } = req.query;

        device = await Device.findOne({
            hardwareID
        });
        device.remove({
            hardwareID: hardwareID
        })

        res.status(200).json({
            status: 'success',
        });

    } catch (err) {
        next (err)
    }
}

exports.listDevice = async (req, res, next) => {
    try {
        devices = await Device.find({})

        res.status(200).json({
            status: 'success',
            data: {
                devices
            }
        });

    } catch (err) {
        next (err)
    }
}

exports.changeLocation = async (req, res, next) => {
    try {
        const {
            hardwareID,
            location
        } = req.query;
    
        await Device.updateOne({hardwareID: hardwareID}, {$set: {location: location}}, function (err,res) {
            if (err) {
                next (err)
            }
        });

        res.status(200).json({
            status: 'success',
        });

    } catch (err) {
        next (err)
    }
}