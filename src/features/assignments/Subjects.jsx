// pages/Assignments/Subjects.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/Subjects.css"; // ✅ Import the CSS file

const Subjects = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const subjects = ["Telugu", "English", "Math", "Science", "Social"];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (subject) => {
    setSelectedSubject(subject);
    setShowPopup(true);
  };

  const handleRoleSelection = (role) => {
    navigate(`/assignments/${classId}/${selectedSubject}?role=${role}`);
    setShowPopup(false);
  };

  return (
    <div className="subjects-container">
      <h2 className="subject-heading">Subjects for Class {classId}</h2>
      <div className="subject-buttons">
        {subjects.map((subject, index) => (
          <button key={index} className={`subject-btn ${subject.toLowerCase()}`} onClick={() => openPopup(subject)}>
            {subject}
          </button>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Who are you?</h3>
            <button onClick={() => handleRoleSelection("student")}>Student</button>
            <button onClick={() => handleRoleSelection("teacher")}>Teacher</button>
            <button onClick={() => setShowPopup(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjects;
