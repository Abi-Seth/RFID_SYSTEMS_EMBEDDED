const Joi = require('joi');

exports.validateTransition = (body) => {
    const validTransitionSchema = Joi.object({
        initialBalance: Joi.number().required(),
        fareToAmount: Joi.number().required(),
        fareToLocation: Joi.string().min(5).max(50).required(),
        newBalance: Joi.number().required(),
        transitionDate: Joi.date().required(),
        transitionStatus: Joi.string().required()
    })
    return validTransitionSchema.validate(body);
}
