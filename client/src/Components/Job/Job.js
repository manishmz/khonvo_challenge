import React, { Fragment, useState, useEffect } from "react";
import Button from "../../CommonComponents/Button/Button";
import "./Job.css";
import { API_URL } from "./../../config";

const Job = props => {
  const [jobList, setJobList] = useState([]);
  const handleRowClick = id => {
    console.log(id);
  };

  useEffect(() => {
    getJobList();
  }, [props]);

  const getJobList = async () => {
    const response = await fetch(`${API_URL}/job/list`);
    const result = await response.json();
    if (result.status === "SUCCESS") {
      setJobList(result.data);
    }
  };
  const handleAddJobClick = () => {
    props.goToAddJobScreen();
  };

  const jobListTable = jobList.map(job => {
    return (
      <div
        key={job.id}
        className="row"
        onClick={() => {
          handleRowClick(job.id);
        }}
      >
        <div>{job.companyName}</div>
        <div>{job.jobTitle}</div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="header">
        <Button onClick={handleAddJobClick}>Add New Job</Button>
      </div>
      <div className="content">
        <div className="table table-header">
          <div>Company Name</div>
          <div>Job Title</div>
        </div>
        <div id="jobListTable" className="table">
          {jobListTable}
        </div>
      </div>
    </Fragment>
  );
};

export default Job;
