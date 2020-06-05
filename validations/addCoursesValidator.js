const Joi = require('@hapi/joi');

const addCoursesValidator = async (req, res, next) => {
    try {
        const addCoursesSchema = Joi.object({
            name: Joi.string().required(),
            userId: Joi.number().required(),
        });

        const value = await addCoursesSchema.validate(
            {
                name: req.body.name,
                userId: req.token.id,
            }
        );
        if (value) {
            next();
        }
        else {
            res.status(400).json({
                success: false,
                message:"false at add courses validator"
            })
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = exports = addCoursesValidator;