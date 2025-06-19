

import React from "react";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    id: 1,
    name: "Painting",
    day: "Monday",
    time: "10:00 AM - 11:00 AM",
    description: "Creative painting to build fine motor skills.",
  },
  {
    id: 2,
    name: "Story Time",
    day: "Tuesday",
    time: "11:30 AM - 12:00 PM",
    description: "Imaginative storytelling with books and puppets.",
  },
  {
    id: 3,
    name: "Outdoor Games",
    day: "Wednesday",
    time: "3:00 PM - 4:00 PM",
    description: "Group physical games for fun and energy.",
  },
];

function Activities() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Day Care Activities</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Activity</th>
            <th style={styles.th}>Day</th>
            <th style={styles.th}>Time</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr
              key={activity.id}
              onClick={() => navigate(`/activities/${activity.id}`)}
              style={{
                ...styles.row,
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
              }}
            >
              <td style={styles.td}>{activity.name}</td>
              <td style={styles.td}>{activity.day}</td>
              <td style={styles.td}>{activity.time}</td>
              <td style={styles.td}>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    fontSize: "28px",
  },
  table: {
    width: "95%",
    margin: "0 auto",
    borderCollapse: "collapse",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px",
    textAlign: "left",
    fontSize: "16px",
  },
  td: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    fontSize: "15px",
  },
  row: {
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Activities;
