const Image = require('../models/imageModel');
const fs = require('fs');
const path = require('path');

exports.upload = async (req, res, next) => {
    try {
        await Image.create({
            name: req.body.name, 
            img: { 
                data: fs.readFileSync(path.join('/Users/tienat/luan_van/server/uploads/' + req.file.filename)), 
                contentType: 'image/svg'
            }     
        });    

        res.status(200).json({
            status: 'success',
        });

    } catch (err) {
        next (err)
    }
}