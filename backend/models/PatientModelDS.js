const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patient_id: String,
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
  availability: [
    {
      day_of_week: String,
      start_time: String,
      end_time: String,
    },
  ],
});

module.exports = mongoose.model('patientmodels', patientSchema);
