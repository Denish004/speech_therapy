require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutesDS');
const userRoutes =require('./routes/user')
const supervisorRoutes = require('./routes/supervisorRoutesDS')
const registerPatient =require('./routes/RegisterPatientSW')
const registerTherapist =require('./routes/RegisterTherapist')
const sessionRoutes=require('./routes/sessionRoutesAB')
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  credentials: true // Allow credentials (cookies, etc.)
}));

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
app.use('/api', registerPatient);
app.use('/api', registerTherapist);
app.use('/api',sessionRoutes)
;
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
