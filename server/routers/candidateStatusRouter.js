const express = require("express");
const candidateStatusController = require("./../controllers/candidateStatusController");

const router = express.Router();
router.post("/tag", candidateStatusController.tagCandidate);
router.get("/list", candidateStatusController.getList);
router.put("/update/stage/:candidateId", candidateStatusController.updateStage);
router.get("/dashboard/:jobId", candidateStatusController.getDashboard);
module.exports = router;
