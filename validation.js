//validation
const Joi = require('@hapi/joi')

//register validation
const registerValid = data => {
    const schema = Joi.object({ 
        name: Joi.string() .min(3) .required(),
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required(),
        isStaff: Joi.boolean()
    });

    return schema.validate(data)
};


//login validation
const loginValid = data => {
    const schema = Joi.object({ 
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
    });

    return schema.validate(data)
}

module.exports.registerValid = registerValid;
module.exports.loginValid = loginValid;