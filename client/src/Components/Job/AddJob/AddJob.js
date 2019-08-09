import React, { Fragment } from "react";
import Button from "../../../CommonComponents/Button/Button";
import "./AddJob.css";
import { useFormInput } from "../../../CustomHooks";
import { API_URL } from "./../../../config";

const AddJob = props => {
  const companyName = useFormInput("");
  const jobTitle = useFormInput("");
  const jobDescription = useFormInput("");
  const hiringManagerName = useFormInput("");
  const hiringManagerEmail = useFormInput("");

  const handleFormSubmit = async event => {
    event.preventDefault();

    const data = {
      companyName: companyName.value,
      jobTitle: jobTitle.value,
      jobDescription: jobDescription.value,
      hiringManagerName: hiringManagerName.value,
      hiringManagerEmail: hiringManagerEmail.value
    };
    const response = await fetch(`${API_URL}/job/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
    props.goToJobScreen();
  };

  return (
    <Fragment>
      <div className="container">
        <div>
          <a href="#" onClick={props.goToJobScreen}>
            ⬅ Back
          </a>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-input">
            <label> Company Name</label>
            <input
              name="companyName"
              maxLength="100"
              type="text"
              {...companyName}
              required
            />
          </div>
          <div className="form-input">
            <label> Job Title</label>
            <input
              name="jobTitle"
              maxLength="50"
              type="text"
              {...jobTitle}
              required
            />
          </div>
          <div className="form-input">
            <label> Job Description</label>
            <textarea
              name="jobDescription"
              rows="6"
              maxLength="500"
              {...jobDescription}
            />
          </div>
          <div className="form-input">
            <label> Hiring Manager Name</label>
            <input
              name="managerName"
              maxLength="50"
              type="text"
              {...hiringManagerName}
              required
            />
          </div>
          <div className="form-input">
            <label> Hiring Manager Email</label>
            <input
              name="managerEmail"
              type="email"
              maxLength="50"
              {...hiringManagerEmail}
              required
            />
          </div>
          <Button type="submit">Add Job</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddJob;
