import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import "./Dashboard.css";
import { API_URL } from "./../../../../config";
import { READABLE_STAGES } from "./../../../../constants";

const Dashboard = forwardRef((props, ref) => {
  const [dashboardData, setDashboardData] = useState([]);
  const [
    pipelineForecastProbability,
    setPipelineForecastProbability
  ] = useState(0);
  useEffect(() => {
    fetchDashboardData();
  }, [props]);

  useImperativeHandle(ref, () => ({
    refreshDashboard() {
      fetchDashboardData();
    }
  }));

  const fetchDashboardData = async () => {
    const response = await fetch(
      `${API_URL}/candidate/dashboard/${props.jobId}`
    );
    const result = await response.json();
    if (result.status === "SUCCESS") {
      const data = {};
      const { stages, pipelineForecast } = result.data;

      stages.map(element => {
        data[element._id.stage] = element.count;
      });
      if (pipelineForecast) {
        setPipelineForecastProbability(pipelineForecast);
      }
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
  return (
    <div className="dcontainer">
      <div className="badge">
        Pipeline Forecast{" "}
        <span className="count">${pipelineForecastProbability}</span>
      </div>
      <br />
      {domData}
    </div>
  );
});

export default Dashboard;
