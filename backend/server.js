require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutesDS');
const cors= require('cors')
const app = express();


app.use(cors({ origin: true }));
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
app.use('/',(req,res)=>{
    res.send("You are SuccesFully Connected");
})

app.use('/api/patients', patientRoutes);




const PORT=8080;
mongoose.connect('mongodb+srv://sih135907:YrAQ5unuFd6vMMuI@cluster0.d9ykcdy.mongodb.net/')
.then(app.listen(PORT,()=>{
    console.log(`Listening to the Port ${PORT}`);
    console.log("Connect to DB");
}))
.catch((e)=>{
    console.log(e);
})