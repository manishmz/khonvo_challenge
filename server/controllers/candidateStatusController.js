const response = require("./../config/response");
const CandidateStatus = require("./../models/CandidateStatus");
const Job = require("./../models/Job");
const shortId = require("shortid");

const tagCandidate = async (req, res) => {
  const data = req.body;
  if (!(data.jobId && data.email)) {
    res.status(400).send(response("FAILED", "Valid data not provided"));
    return;
  }
  try {
    const list = await CandidateStatus.findOne({
      jobId: data.jobId,
      email: data.email
    });
    if (list) {
      res.send(response("SUCCESS", "Candidate already tagged"));
      return;
    }
    const candidateStatus = new CandidateStatus({
      id: shortId.generate(),
      ...data
    });
    const saveData = await candidateStatus.save();
    if (saveData) {
      await addCandidateToJob(data.jobId, saveData._id);
      res.send(response("SUCCESS", "Candidate tag successfully"));
      return;
    }
    res.send(response("FAILED", "Unable to tag candidate"));
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

const addCandidateToJob = async (jobId, candidateId) => {
  try {
    const job = await Job.findOne({ id: jobId });
    job.candidates.push(candidateId);
    const saved = await job.save();
  } catch (exception) {
    console.log(exception);
  }
};

const getList = async (req, res) => {
  try {
    const jobId = req.query.jobId;
    const searchKey = req.query.searchKey;
    const queryOption = {
      $and: [
        { jobId },
        {
          $or: [
            {
              email: {
                $regex: ".*" + searchKey + ".*",
                $options: "i"
              }
            },
            {
              stage: {
                $regex: ".*" + searchKey + ".*",
                $options: "i"
              }
            }
          ]
        }
      ]
    };
    const list = await CandidateStatus.find(queryOption).sort({ _id: -1 });

    if (list) {
      res.send(response("SUCCESS", list));
      return;
    }
    res.send(response("FAILED", "Unable to fetch list"));
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

const updateStage = async (req, res) => {
  try {
    const candidateId = req.query.id;
    const updatedStage = req.body.stage;
    const candidate = await CandidateStatus.update(
      { id: candidateId },
      { stage: updatedStage }
    );
    if (candidate) {
      res.send(response("SUCCESS", "Stage updated successfully"));
      return;
    }
    res.send(response("FAILED", "Unable to update"));
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

const getDashboard = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const candidates = await CandidateStatus.aggregate([
      { $match: { jobId } },
      {
        $group: {
          _id: { stage: "$stage" },
          count: { $sum: 1 }
        }
      }
    ]);
    if (candidates) {
      res.send(response("SUCCESS", candidates));
      return;
    }
    res.send(response("FAILED", "Unable to fetch data"));
  } catch (exception) {
    console.log(exception);
    res.send(response("FAILED", "Server error occurred"));
  }
};

module.exports = { tagCandidate, getList, updateStage, getDashboard };
