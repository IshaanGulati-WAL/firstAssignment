const jwt = require('jsonwebtoken');
const userModel = require('../models/users');

const jwtDecode = async (req, res, next) => {
    try {
        req.token = jwt.verify(req.headers['token'], process.env.JWT_SECRET_TOKEN);//check for validity in the user base and 
        const user = await userModel.query()
            .findOne({ email: req.token.email });
        if (user.id == req.token.id) {
            console.log(req.token)
            next();
        } else {
            res.status(403).json({
                error: 'User not found at jwt decode',
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = exports = jwtDecode;