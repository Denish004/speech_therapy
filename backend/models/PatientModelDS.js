const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    sessionDate: String,
    activities: String,
    progress: Number // e.g., percentage of goal completion
});

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    therapyPlan: String,
    progress: [progressSchema],
    feedback: String,
    achievements: [String]
});

const PatientModel = mongoose.model('PatientModel', patientSchema);
module.exports = PatientModel;
