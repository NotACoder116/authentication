const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const control = require('./queries');
const jwt = require('jsonwebtoken');

const signToken = id =>{
    return jwt.sign({ id },"sfkjgwi32648sdd976fs94hjkrfv89s");
};
const task1=async(req, res) => {

    let saltRound= await bcrypt.genSalt(10);
      return new Promise((reject,resolve)=>{
       bcrypt.hash(req.body.password, saltRound, async(err, hash) =>{
      
         if (err)
            reject(err);
         else 
         {
            const user =
            {  id: req.body.id,
               email: req.body.email,
               password: hash,
               phone: req.body.phone
            }
            const usertoken = signToken(user.phone);
            try 
            {  
               let addData = await control.users.add_user(user);
               if (addData)
                {

                    res.status(200).json({ status:'ok',
                      token: usertoken,
                      data:{
                          addData
                         }})
                 }
            } 
            catch (error) {
               console.log("catch "+error)
               res.send(error)
            }
  
          }
      })
   })
 }


 


module.exports=task1;
