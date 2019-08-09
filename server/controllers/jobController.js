const Job = require("./../models/Job");
const shortId = require("shortid");
const response = require("./../config/response");
const {
  PER_JOB_AMOUNT,
  FORECAST_PROBABILITY_PERCENTAGE
} = require("./../constants");

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
    const searchKey = req.query.searchKey;
    const queryOption = {
      $or: [
        {
          companyName: {
            $regex: ".*" + searchKey + ".*",
            $options: "i"
          }
        },
        {
          jobTitle: {
            $regex: ".*" + searchKey + ".*",
            $options: "i"
          }
        }
      ]
    };
    const jobList = await Job.find(queryOption)
      .select("-_id id companyName jobTitle candidates")
      .populate("candidates", "-_id stage");
    const pipeLineForecastList = jobList.map(job => {
      return {
        id: job.id,
        companyName: job.companyName,
        jobTitle: job.jobTitle,
        pipelineForecast: _calculatePipelineForeCast(job.candidates)
      };
    });
    res.send(response("SUCCESS", pipeLineForecastList));
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

const _calculatePipelineForeCast = arr => {
  return arr.reduce((acc, data) => {
    acc += parseFloat(
      (
        (FORECAST_PROBABILITY_PERCENTAGE[data.stage] / 100) *
        PER_JOB_AMOUNT
      ).toFixed(2)
    );

    return acc;
  }, 0);
};

const getJobDetails = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findOne({ id: jobId }).select("-candidates");
    if (job) {
      res.send(response("SUCCESS", job));
    } else {
      res.send(response("SUCCESS", "Job not found"));
    }
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

module.exports = { addJob, getJobList, getJobDetails };
