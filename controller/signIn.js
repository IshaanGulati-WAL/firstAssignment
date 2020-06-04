require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userModel = require('../models/users');

async function signInUser(req, res, next) {
    try {
        const user = await userModel.query()
            .findOne({ email: req.body.email });
        if (user) {
            let verifyPassword = bcrypt.compareSync(req.body.password, user.password);
            if (verifyPassword) {
                const token = jwt.sign({ id: user.id },
                    process.env.JWT_SECRET_TOKEN);

                return res.json({
                    success: true,
                    user: {
                        userId: user.id,
                        token,
                    },
                });
            }
        }
        return res.status(403).json({
            error: 'Invalid credentials.',
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = exports = signInUser;