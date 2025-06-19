import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const activityDetails = {
  1: {
    name: "Painting",
    day: "Monday",
    time: "10:00 AM - 11:00 AM",
    detail: "Children will explore creativity with brushes and colors in a calm, guided environment.",
  },
  2: {
    name: "Story Time",
    day: "Tuesday",
    time: "11:30 AM - 12:00 PM",
    detail: "Children listen to interactive stories that boost imagination and listening skills.",
  },
  3: {
    name: "Outdoor Games",
    day: "Wednesday",
    time: "3:00 PM - 4:00 PM",
    detail: "Team games that improve coordination, cooperation, and physical health.",
  },
};

function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activityDetails[id];

  if (!activity) return <p style={{ textAlign: "center" }}>Activity not found</p>;

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{activity.name}</h2>
      <p><strong>Day:</strong> {activity.day}</p>
      <p><strong>Time:</strong> {activity.time}</p>
      <p style={{ marginTop: "15px" }}>{activity.detail}</p>
      <button onClick={() => navigate("/activities")} style={styles.button}>Back to Activities</button>
    </div>
  );
}

const styles = {
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default ActivityDetail;
