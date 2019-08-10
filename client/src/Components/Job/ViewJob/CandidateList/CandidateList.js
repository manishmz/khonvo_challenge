import React, { useState, useEffect, Fragment } from "react";
import "./CandidateList.css";
import { API_URL } from "./../../../../config";
import { CANDIDATE_STAGES } from "./../../../../constants";
import Button from "./../../../../CommonComponents/Button/Button";
import { READABLE_STAGES } from "./../../../../constants";

const CandidateList = props => {
  const [candidateList, setCandidateList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  useEffect(() => {
    fetchCandidatesList();
  }, [searchKey]);

  const handleCandidateTag = async event => {
    if (!candidateEmail) {
      return;
    }
    const data = {
      email: candidateEmail,
      jobId: props.jobId,
      stage: CANDIDATE_STAGES.PROSPECT
    };
    const response = await fetch(`${API_URL}/candidate/tag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result.status === "SUCCESS") {
      setCandidateEmail("");
      fetchCandidatesList();
      props.refreshDashboard();
    }
  };

  const fetchCandidatesList = async () => {
    const response = await fetch(
      `${API_URL}/candidate/list?jobId=${props.jobId}&&searchKey=${searchKey}`
    );
    const result = await response.json();
    if (result.status === "SUCCESS") {
      setCandidateList(result.data);
    }
  };

  const updateCandidateStage = async (id, updatedStage) => {
    const data = {
      stage: updatedStage
    };
    const response = await fetch(`${API_URL}/candidate/update/stage?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    fetchCandidatesList();
    props.refreshDashboard();
  };

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchKey(value);
  };

  const handleStageChange = (event, index) => {
    const value = event.target.value;
    updateCandidateStage(candidateList[index].id, value);
  };

  const stageOptions = Object.entries(READABLE_STAGES).map(stage => {
    return <option value={stage[0]}>{stage[1]}</option>;
  });

  const candidateData = candidateList.map((candidate, index) => {
    return [
      <div key={index + "1"}>{candidate.email}</div>,
      <div key={index + "2"}>
        <select
          value={candidate.stage}
          onChange={event => handleStageChange(event, index)}
        >
          {stageOptions}
        </select>
      </div>
    ];
  });

  const handleTagInputKeyPress = event => {
    if (event.keyCode === 13 && isValidEmail(candidateEmail)) {
      handleCandidateTag();
    }
  };

  const isValidEmail = email => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email) ? true : false;
  };
  return (
    <Fragment>
      <div className="form-input margin-top-10">
        <input
          type="email"
          className="tag-input"
          placeholder="Candidate Email To Tag"
          name="tag"
          value={candidateEmail}
          onChange={event => setCandidateEmail(event.target.value)}
          onKeyDown={handleTagInputKeyPress}
        />
        <Button className="tag-button" onClick={handleCandidateTag}>
          @Tag
        </Button>
      </div>
      <div className="form-input">
        <input
          type="text"
          value={searchKey}
          onChange={handleSearchChange}
          placeholder="Search for candidate by email, stage"
          className="search-input"
        />
      </div>
      <div className="candidate-table">
        <div className="ct-header">Candidate Email</div>
        <div className="ct-header">Stage</div>
        {candidateData}
      </div>
    </Fragment>
  );
};

export default CandidateList;
