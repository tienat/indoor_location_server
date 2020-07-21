const User = require('../models/userModel');
const AppError = require('../utils/appError');

exports.changeActive = async (req, res, next) => {
    try {
        if (req.user.role !== "admin" || !req.user.active) {
            return next(new AppError(401, 'fail', 'This user is not admin or inactive'), req, res, next);
        }
        await User.findByIdAndUpdate(req.query.id, {
            active: req.query.active
        });

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        next (err)
    }
};