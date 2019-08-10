import React, { Fragment, useState, useEffect, useRef } from "react";
import "./ViewJob.css";
import { API_URL } from "./../../../config";
import CandidateList from "./CandidateList/CandidateList";
import Dashboard from "./Dashboard/Dashboard";
import Collapsible from "./../../../CommonComponents/Collapsible/Collapsible";

const ViewJob = props => {
  const initialJobDetails = {
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    hiringManagerName: "",
    hiringManagerEmail: ""
  };
  const [jobDetails, setJobDetails] = useState(initialJobDetails);
  const dashboardRef = useRef();
  useEffect(() => {
    fetchJobDetails();
  }, [props]);

  const fetchJobDetails = async () => {
    const response = await fetch(`${API_URL}/job/detail/${props.jobId}`);
    const result = await response.json();
    if (result.status === "SUCCESS") {
      setJobDetails(result.data);
    }
  };

  const refreshDashboard = () => dashboardRef.current.refreshDashboard();
  return (
    <Fragment>
      <div className="container">
        <div>
          <a href="#" onClick={props.goToJobScreen}>
            ⬅ Back
          </a>
        </div>
        <Collapsible header="Dashboard">
          <Dashboard jobId={props.jobId} ref={dashboardRef} />
        </Collapsible>
        <Collapsible header="Job Details">
          <div className="grid">
            <div className="label">Company Name:</div>
            <div className="text-value">{jobDetails.companyName}</div>
            <div className="label">Title:</div>
            <div className="text-value">{jobDetails.jobTitle}</div>
            <div className="label">Description:</div>
            <div className="text-value">{jobDetails.jobDescription}</div>
            <div className="label">HR Name:</div>
            <div className="text-value">{jobDetails.hiringManagerName}</div>
            <div className="label">HR Email:</div>
            <div className="text-value">{jobDetails.hiringManagerEmail}</div>
          </div>
        </Collapsible>
        <CandidateList
          jobId={props.jobId}
          refreshDashboard={refreshDashboard}
        />
      </div>
    </Fragment>
  );
};

export default ViewJob;
