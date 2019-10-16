
var Joi=require("joi")
const PasswordComplexity = require('joi-password-complexity');

function validate(req,res,next)
{
  const schema = Joi.object().keys({
    id: Joi.number(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
    phone: Joi.string().regex(/^[6-9][0-9]{9}$/)
  })
Joi.validate(req.body, schema, function (err, value)
     { 
       if(err)
       {
     console.log(req.body)
      res.send("Error Occured in validation"+err)
       }
      next()
     });  
   
}
exports.validate = validate;



