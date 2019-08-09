const express = require("express");
const database = require("./config/database");
const jobRouter = require("./routers/jobRouter");
const candidateRouter = require("./routers/candidateStatusRouter");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/job", jobRouter);
app.use("/api/candidate", candidateRouter);

database.connect();

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
