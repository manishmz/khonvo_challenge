const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  id: { type: String },
  companyName: { type: String, require: true },
  jobTitle: { type: String, require: true },
  jobDescription: { type: String },
  hiringManagerName: { type: String },
  hiringManagerEmail: { type: String },
  candidates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CandidateStatus",
      default: []
    }
  ]
});

module.exports = mongoose.model("Job", JobSchema);
