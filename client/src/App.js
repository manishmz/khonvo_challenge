import React, { useState } from "react";
import "./App.css";
import Job from "./Components/Job/Job";
import AddJob from "./Components/Job/AddJob/AddJob";

function App() {
  const [addJobScreen, setAddJobScreen] = useState(false);
  const [jobScreen, setJobScreen] = useState(true);
  const goToAddJobScreen = async () => {
    setJobScreen(false);
    setAddJobScreen(true);
  };

  const goToJobScreen = async () => {
    setAddJobScreen(false);
    setJobScreen(true);
  };
  return (
    <div>
      {addJobScreen && <AddJob goToJobScreen={goToJobScreen} />}
      {jobScreen && <Job goToAddJobScreen={goToAddJobScreen} />}
    </div>
  );
}

export default App;
