const Joi = require('@hapi/joi');

const Users = require('../models/users');

const signUpValidator = async (req, res, next) => {
    try {
        const addAccountDataSchema = Joi.object({
            name: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().email().required()
        });

        const value = await addAccountDataSchema.validate(
            {
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
            }
        );
        if (value) {
            return value;
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
        const isValid = signUpValidator(req.body);
        if (isValid) {
            /* Email validation */
            const emailExist = await Users.query().select().where('email', 'ilike', req.body.email);
            if (emailExist.length != 0) {
                res.status(409).json({
                    error: "Email Exists",
                });
                return;
            }
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = exports = dbValidations;