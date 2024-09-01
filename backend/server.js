require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutesDS');
const userRoutes =require('./routes/user')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.use('/', (req, res) => {
//   res.send('You are Successfully Connected');
// });

app.use('/api', patientRoutes);
app.use("/api/user",userRoutes)
const PORT = process.env.PORT || 8080;
mongoose.connect("mongodb+srv://sih135907:YrAQ5unuFd6vMMuI@cluster0.d9ykcdy.mongodb.net/")
.then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to the Port ${PORT}`);
    console.log('Connected to DB');
  });
})
.catch((e) => {
  console.log(e);
});
