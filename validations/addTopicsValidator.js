const Joi = require('@hapi/joi');

const addTopicsValidator = async (req, res, next) => {
    try {
        const addCoursesSchema = Joi.object({
            name: Joi.string().required(),
            courseId: Joi.number().required(),
        });

        const value = await addCoursesSchema.validate(
            {
                name: req.body.name,
                courseId: req.body.courseId,
            }
        );
        if (value) {
            next();
        }
        else {
            res.status(400).json({
                success: false,
            });
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = exports = addTopicsValidator;