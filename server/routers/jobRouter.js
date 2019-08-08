const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();
router.post("/add", jobController.addJob);
router.get("/list", jobController.getJobList);
router.get("/detail/:id", jobController.getJobDetails);

module.exports = router;
