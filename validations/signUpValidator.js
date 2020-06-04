const Joi = require('@hapi/joi');

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

module.exports = exports = signUpValidator;