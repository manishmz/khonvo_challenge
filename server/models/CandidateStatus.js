const mongoose = require("mongoose");
const { JOB_STAGES_ENUM } = require("../constants");

const CandidateStatusSchema = mongoose.Schema({
  id: { type: String },
  email: { type: String, require: true },
  jobId: { type: String, ref: "Job", require: true },
  stage: { type: String, enum: Object.values(JOB_STAGES_ENUM) }
});

module.exports = mongoose.model("CandidateStatus", CandidateStatusSchema);
