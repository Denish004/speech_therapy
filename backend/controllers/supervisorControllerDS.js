const mongoose =require('mongoose');

// Get all patient data
const {MatchingResult} = require('../models/MatchSW');

// get all Cards
const getAllMatchResults=async(req,res)=>{
    try {
    const results =await MatchingResult.find({});
    res.status(200).json(results);
    }
    catch (error) {
        res.status(400).json({error:error.mesage})
    }

}


// const get=async(req,res)=>{
//     const {id}=req.params
//     const Card=await Cardmodel.findById(id)
//     console.log(Card);
//     if(!mongoose.Types.ObjectId.isValid(id)){
//        return res.status(404).json({error:"No Such Card Exists"})
        
//     }
//     return res.status(200).json(Card)
// }
module.exports = {
  getAllMatchResults
};