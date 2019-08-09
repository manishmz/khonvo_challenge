import React, { useState } from "react";
import "./App.css";
import Job from "./Components/Job/Job";
import AddJob from "./Components/Job/AddJob/AddJob";
import ViewJob from "./Components/Job/ViewJob/ViewJob";

function App() {
  const [addJobScreen, setAddJobScreen] = useState(false);
  const [jobScreen, setJobScreen] = useState(true);
  const [jobDetailScreen, setJobDetailScreen] = useState(false);
  const [jobId, setJobId] = useState("");

  const goToAddJobScreen = async () => {
    setJobScreen(false);
    setJobDetailScreen(false);
    setAddJobScreen(true);
  };

  const goToJobScreen = async () => {
    setJobDetailScreen(false);
    setAddJobScreen(false);
    setJobScreen(true);
  };

  const goToJobDetails = async jobId => {
    setJobId(jobId);
    setAddJobScreen(false);
    setJobScreen(false);
    setJobDetailScreen(true);
  };

  return (
    <div>
      {jobDetailScreen && (
        <ViewJob jobId={jobId} goToJobScreen={goToJobScreen} />
      )}
      {addJobScreen && <AddJob goToJobScreen={goToJobScreen} />}
      {jobScreen && (
        <Job
          goToAddJobScreen={goToAddJobScreen}
          goToJobDetails={goToJobDetails}
        />
      )}
    </div>
  );
}

export default App;
