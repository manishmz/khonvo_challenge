import React, { Fragment, useState, useEffect } from "react";
import Button from "../../CommonComponents/Button/Button";
import "./Job.css";
import { API_URL } from "./../../config";

const Job = props => {
  const [jobList, setJobList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    getJobList();
  }, [searchKey]);

  const handleRowClick = id => {
    props.goToJobDetails(id);
  };

  const getJobList = async () => {
    const response = await fetch(`${API_URL}/job/list?searchKey=${searchKey}`);
    const result = await response.json();
    if (result.status === "SUCCESS") {
      setJobList(result.data);
    }
  };
  const handleAddJobClick = () => {
    props.goToAddJobScreen();
  };

  const handleSearchChange = event => {
    setSearchKey(event.target.value);
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
        <div>${job.pipelineForecast}</div>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="header">
        <Button onClick={handleAddJobClick}>Add New Job</Button>
        <div className="search-container  form-input">
          <input
            type="text"
            className="job-search"
            placeholder="Search by company, job title"
            value={searchKey}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="content">
        <div className="table table-header">
          <div>Company Name</div>
          <div>Job Title</div>
          <div>Pipeline Forecast</div>
        </div>
        <div className="table">{jobListTable}</div>
      </div>
    </Fragment>
  );
};

export default Job;
