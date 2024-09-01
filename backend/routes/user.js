const express =require('express');
const router=express.Router();
const { loginUser,signUser }= require('../controllers/usercontroller.js');


router.post('/signup',signUser)
router.post('/login1',loginUser)



module.exports=router;