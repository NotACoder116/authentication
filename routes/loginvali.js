
var Joi=require("joi");

function loginvalidate(req, res, next) {
    const schema = Joi.object().keys({
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
    })
    Joi.validate(req.body, schema, function (err, value) {
        if (err) {
            console.log(req.body)
            res.send("Error Occured in validation" + err)
        }
        next()
    });

}
exports.loginvali= loginvalidate;



