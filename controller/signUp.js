const User = require('../models/users');

async function createUser(req, res, next) {
    try {
        const user = await User.query().insert({
            name: req.body.name,            
            email: req.body.email,
            password:req.body.password,
        }).returning('*');
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
}

module.exports = exports = createUser;
