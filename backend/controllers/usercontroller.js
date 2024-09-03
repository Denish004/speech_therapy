const express = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js');

const createToken=(_id)=>{
   return jwt.sign({_id},"SIH",{expiresIn:'1h'})
}
const loginUser = async(req, res) => {
    console.log("3")
     const {email,password} =req.body;
     console.log(email,password);
    try {
        console.log("3")
        const user= await User.login(email,password)
        console.log(user);
        let {role} = user;
        let {_id}=user;
        let {name}=user;
       
        
        const token=createToken(user._id)
        console.log("token :",token);
        res.status(200).json({email,token,role,_id,name})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

const signUser = async(req, res) => {
    const {email,password,name,role} =req.body;
    try {
        const user= await User.signup(email,password,name,role)

        // create a token for the user
        const token=createToken(user._id)
        console.log(token);
        let id=user._id
        res.status(200).json({email,token,role,id,name})

          console.log("token created");
    } catch (error) {
        res.status(400).json({error: error.message})
    }
// res.json({mssg:"sign routes"})
}


module.exports={loginUser, signUser} ;