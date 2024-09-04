const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  therapist_id: String,
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
  availability: [
   
  ],
  insurance_accepted: [String],
  session_cost: {
    currency: String,
    amount: Number,
  },
  gender: String,
});

module.exports = mongoose.model('therapists', therapistSchema);
