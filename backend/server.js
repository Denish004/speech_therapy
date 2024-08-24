const mongoose = require('mongoose');
const express = require('express')
const app = express()
const PORT=8080;
mongoose.connect('mongodb+srv://sih135907:YrAQ5unuFd6vMMuI@cluster0.d9ykcdy.mongodb.net/')
.then(app.listen(PORT,()=>{
    console.log(`Listening to the Port ${PORT}`);
    console.log("Connect to DB");
}))
.catch((e)=>{
    console.log(e);
})