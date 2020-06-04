const Joi = require('@hapi/joi');

const addCoursesValidator = async (req, res, next) => {
    try {
        const addCoursesSchema = Joi.object({
            name: Joi.string().required(),
            userId: Joi.integer().required(),
        });

        const value = await addCoursesSchema.validate(
            {
                name: req.body.name,
                userId: req.body.userId,
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

module.exports = exports = addCoursesValidator;