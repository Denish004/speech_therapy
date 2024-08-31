const mongoose = require('mongoose');

// Patient model
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  speech_disorder: String,
  severity: String,
  preferred_languages: [String],
  location: {
    city: String,
    state: String,
    zip_code: String,
    country: String,
  },
  insurance_provider: String,
  budget: {
    currency: String,
    amount: Number,
  },
  gender_preference: String,
  cultural_background: String,
  availability: [{
    day_of_week: String,
    start_time: String,
    end_time: String,
  }],
});

const Patient = mongoose.model('patientmodels', patientSchema);

// Therapist model
const therapistSchema = new mongoose.Schema({
  name: String,
  specializations: [String],
  age_groups: [String],
  therapeutic_approaches: [String],
  languages: [String],
  location: {
    city: String,
    state: String,
    zip_code: String,
    country: String,
  },
  availability: [{
    day_of_week: String,
    start_time: String,
    end_time: String,
  }],
  insurance_accepted: [String],
  session_cost: {
    currency: String,
    amount: Number,
  },
  gender: String,
});

const Therapist = mongoose.model('therapists', therapistSchema);


const matchingResultSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, required: true },
  therapistId: { type: mongoose.Schema.Types.ObjectId, required: true },
  score: { type: Number, required: true },
});

const MatchingResult = mongoose.model('MatchingResult', matchingResultSchema);


module.exports = { Patient, Therapist, MatchingResult };
