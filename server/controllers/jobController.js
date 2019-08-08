const Job = require("./../models/Job");
const shortId = require("shortid");
const response = require("./../config/response");

const addJob = async (req, res) => {
  try {
    if (!req.body) {
      res.send("failed");
      return;
    }
    const job = new Job({ ...req.body, id: shortId.generate() });
    const saveData = await job.save();
    if (saveData) {
      res.send(response("SUCCESS", "Job saved successfully"));
    } else {
      res.send(response("SUCCESS", "Unable to save job"));
    }
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

const getJobList = async (req, res) => {
  try {
    const jobList = await Job.find().select("-_id id companyName jobTitle");
    res.send(response("SUCCESS", jobList));
  } catch (exception) {
    console.log(exception);
    res.send(("FAILED", "Server error occurred"));
  }
};

const getJobDetails = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findOne({ id: jobId });

    if (job) {
      res.send(response("SUCCESS", job));
    } else {
      res.send(response("SUCCESS", "Job not found"));
    }
  } catch (exception) {
    console.log(exception);
    res.send(("FAILED", "Server error occurred"));
  }
};

module.exports = { addJob, getJobList, getJobDetails };
