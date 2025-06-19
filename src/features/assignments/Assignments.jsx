import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Assignments.css"; // ✅ Make sure this path is correct

const Page3 = () => {
  const navigate = useNavigate();
  const [classAssignments, setClassAssignments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("classAssignments");
    if (stored) {
      setClassAssignments(JSON.parse(stored));
    } else {
      const initial = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        name: `Class ${i + 1}`,
      }));
      setClassAssignments(initial);
      localStorage.setItem("classAssignments", JSON.stringify(initial));
    }
  }, []);

  const handleAddClass = () => {
    const nextId = classAssignments.length > 0 ? Math.max(...classAssignments.map(c => c.id)) + 1 : 1;
    const newClass = { id: nextId, name: `Class ${nextId}` };
    const updated = [...classAssignments, newClass];
    setClassAssignments(updated);
    localStorage.setItem("classAssignments", JSON.stringify(updated));
  };

  const handleDeleteClass = (id) => {
    const updated = classAssignments.filter(c => c.id !== id);
    setClassAssignments(updated);
    localStorage.setItem("classAssignments", JSON.stringify(updated));
  };

  const handleClassClick = (id) => {
    const cls = classAssignments.find(c => c.id === id);
    toast.success(`Opening ${cls.name} Assignments...`, {
      autoClose: 1000,
      onClose: () => navigate(`/assignments/${id}`),
    });
  };

  const midpoint = Math.ceil(classAssignments.length / 2);
  const firstHalf = classAssignments.slice(0, midpoint);
  const secondHalf = classAssignments.slice(midpoint);

  const renderButton = (cls) => (
    <div key={cls.id} className="class-wrapper">
      <button
        className={`class-btn class-${cls.id}`}
        onClick={() => handleClassClick(cls.id)}
      >
        {cls.name}
      </button>
      <button
        className="delete-btn"
        onClick={() => handleDeleteClass(cls.id)}
        title="Delete this class"
      >
        🗑️
      </button>
    </div>
  );

  return (
    <div className="page3-container">
      <h2 className="page3-title">Class-wise Assignments</h2>

      <div className="class-grid">
        <div className="class-column">
          {firstHalf.map(renderButton)}
        </div>
        <div className="class-column">
          {secondHalf.map(renderButton)}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="add-class-btn" onClick={handleAddClass}>
          ➕ Add Class
        </button>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Page3;
