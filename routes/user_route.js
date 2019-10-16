const express=require('express')
const router = express.Router();
const signup=require('./querycall');
const login=require('./login');
const registervali=require('./registervali')
const loginvali=require('./loginvali');

router.post('/signup',registervali.validate, signup);
router.post('/login',loginvali.loginvali,login);


module.exports = router;