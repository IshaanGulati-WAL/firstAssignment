const Joi = require('@hapi/joi');

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
            next();
        }
        else {
            res.status(400).json({
                success: false,
            })
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = exports = loginValidator;