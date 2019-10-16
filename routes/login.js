const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const control = require('./queries');
const jwt = require('jsonwebtoken');


const signToken = id =>{
    return jwt.sign({ id },"sfkjgwi32648sdd976fs94hjkrfv89s");
};

 const tasks=async(req,res)=>{
        const user={
            email:req.body.email,
            password:req.body.password
           }
            try 
            {
               let checkData = await control.users.login_user(user);
               if (checkData.length>=1)
                { 
               const checkPassword =await bcrypt.compare(req.body.password,checkData[0].password)
                       if(!checkPassword)
                        {
                      
                         console.log("not correct");
                        }
                        else
                        {
                              const token = signToken(user.email);
                                    res.status(200).json({
                                        status:'ok',
                                        token: token
                                    });
                        }
                        }
                 }
            catch (error) {
               res.send(error);
            }
        }
     
       
        
 


module.exports=tasks;
