const Joi = require('@hapi/joi');
const Users=require('../models/users')
const loginValidator = async (req, res, next) => {
    try {
        const loginDataSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        const value = await loginDataSchema.validate(
            {
                email: req.body.email,
                password: req.body.password
            }
        );
        if (value) {
            return value
        }
        else {
            res.status(400).json({
                success: false,
                value
            })
        }
    }
    catch (error) {
        next(error);
    }
}

async function dbValidations(req, res, next) {
    try {
        const isValid = loginValidator(req.body);
        if (isValid) {
            /* Email validation */
            const emailExist = await Users.query().select().where('email', 'ilike', req.body.email);
            if (emailExist.length == 0) {
                res.status(409).json({
                    error: "User not Exists",
                });
                return;
            }
            else {
                next();
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = exports = dbValidations;