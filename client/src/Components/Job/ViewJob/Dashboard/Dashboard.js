import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { API_URL } from "./../../../../config";
import { READABLE_STAGES } from "./../../../../constants";

const Dashboard = props => {
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    fetchDashboardData();
  }, [props]);

  const fetchDashboardData = async () => {
    const response = await fetch(
      `${API_URL}/candidate/dashboard/${props.jobId}`
    );
    const result = await response.json();
    if (result.status === "SUCCESS") {
      const data = {};
      result.data.map(element => {
        data[element._id.stage] = element.count;
      });
      setDashboardData(data);
    }
  };
  const domData = [];
  for (let stage in READABLE_STAGES) {
    const ele = (
      <div className="badge">
        {READABLE_STAGES[stage]}
        <span className="count">
          {dashboardData[stage] ? dashboardData[stage] : 0}
        </span>
      </div>
    );
    domData.push(ele);
  }
  return <div className="dcontainer">{domData}</div>;
};

export default Dashboard;
