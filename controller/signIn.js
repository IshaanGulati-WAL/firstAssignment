
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passwordHash = require('password-hash');
const userModel = require('../models/users');

async function signInUser(req, res, next) {
    try {
        const user = await userModel.query()
            .findOne({ email: req.body.email });
        console.log(!(user))
        if (user) {
            console.log(true)
            let verifyPassword = false;
            // verifyPassword = passwordHash.verify(req.body.password, user.password);
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                verifyPassword = result;
            })
            // let verifyPassword = bcrypt.compareSync(req.body.password, user.password);//use async
            if (verifyPassword) {
                const token = jwt.sign({ id: user.id,email:user.email },
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
        else {
            return res.status(403).json({
                error: 'Invalid credentials.',
            });
        }
    } catch (error) {
        return next(error);
    }
}

module.exports = exports = signInUser;
