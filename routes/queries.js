const mysql=require('mysql');
const user=require('../models/user_model');
const task={}

function add_user(data){
    return new Promise((resolve,reject)=>{
      console.log("query")
        user.query('insert into user_authen2 set ?',data,(err, result) => {
         console.log("query executed");
            if (err) {
              reject(err);
                }
            else {
              resolve(result);
            }
    })
})
}
function login_user(data){
  console.log(data)
  return new Promise((resolve,reject)=>{
      user.query('select * from user_authen2 where email=?',[data.email],(err, result) => {
       console.log("query executed");
          if (err) {
            reject(err);
              }
          else {
            resolve(result);
          }
  })
})
}


exports.users ={
  add_user:add_user,
  login_user:login_user
} 