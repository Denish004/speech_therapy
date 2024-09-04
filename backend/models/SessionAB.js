const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    // type: String,
    ref: 'patientmodels',  // Assuming you have a Patient model
    required: true
  },
  therapyStartDate: {
    type: Date,
    required: true
  },
  numberOfWeeks: {
    type: Number,
    required: true
  },
  therapyTitles: [
    {
      week: Number,
      title: String
    }
  ], 
  TherapistId: {
    type: mongoose.Schema.Types.ObjectId,
    // type: String,
    ref: 'therapists',  // Assuming you have a Therapist model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('sessions', sessionSchema);

