const mongoose = require('mongoose');

// Patient model
const patientSchema = new mongoose.Schema({
  patientId:mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  speech_disorder: String,
  severity: String,
  preferred_languages: [String],
  location: String,
  insurance_provider: String,
  budget: Number,
  gender_preference: String,
  cultural_background: String,
  availability: [{type :String
  }],
});

const Patient = mongoose.model('patientmodels', patientSchema);

// Therapist model
const therapistSchema = new mongoose.Schema({
  therapistId:mongoose.Schema.Types.ObjectId,
  name: String,
  specializations: [String],
  age_groups: [String],
  therapeutic_approaches: [String],
  languages: [String],
  location:Number,
  availability: [{String
  }],
  insurance_accepted: [String],
  session_cost:Number,
  gender: String,
});

const Therapist = mongoose.model('therapists', therapistSchema);


const matchingResultSchema = new mongoose.Schema({
  patientIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'patientmodels', required: true }],
  therapistId: { type: mongoose.Schema.Types.ObjectId, required: true },
  score: { type: Number, required: true },
});



const MatchingResult = mongoose.model('MatchingResult', matchingResultSchema);


const supervisorSchema = new mongoose.Schema({
  supervisorId: mongoose.Schema.Types.ObjectId,
  name: String,
  gender: String,
  location: String,
  experience: Number,
  email: String,
  phone: String

});

const Supervisor = mongoose.model('supervisors', supervisorSchema);

module.exports = { Patient, Therapist, MatchingResult, Supervisor };
