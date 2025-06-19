import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const students = [
  { id: 1, name: "Aarav Sharma", class: "Grade 2", year: "2024-25", totalDays: 30, presentDays: 28, weeklyAttendance: [5, 5, 4, 5, 4, 5] },
  { id: 2, name: "Diya Mehra", class: "Grade 1", year: "2024-25", totalDays: 30, presentDays: 25, weeklyAttendance: [4, 4, 3, 5, 4, 5] },
  { id: 3, name: "Rohan Patel", class: "Grade 3", year: "2024-25", totalDays: 30, presentDays: 30, weeklyAttendance: [5, 5, 5, 5, 5, 5] },
  { id: 4, name: "Chaitanya", class: "Grade 2", year: "2024-25", totalDays: 30, presentDays: 27, weeklyAttendance: [4, 5, 4, 5, 4, 5] },
  { id: 5, name: "Prashanth", class: "Grade 1", year: "2024-25", totalDays: 30, presentDays: 28, weeklyAttendance: [5, 5, 5, 5, 4, 4] },
  { id: 6, name: "Pragna", class: "Grade 3", year: "2024-25", totalDays: 30, presentDays: 27, weeklyAttendance: [5, 5, 4, 4, 4, 5] },
  { id: 7, name: "Sai sri", class: "Grade 2", year: "2024-25", totalDays: 30, presentDays: 26, weeklyAttendance: [4, 5, 3, 4, 5, 5] },
];

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === parseInt(id));

  if (!student) return <p style={{ color: "red" }}>Student not found</p>;

  const percentage = ((student.presentDays / student.totalDays) * 100).toFixed(1);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2>Student Attendance Details</h2>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Class:</strong> {student.class}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Total Days:</strong> {student.totalDays}</p>
        <p><strong>Present Days:</strong> {student.presentDays}</p>
        <p><strong>Attendance %:</strong> {percentage}%</p>
      </div>

      <h3 style={{ marginTop: "30px" }}>Weekly Attendance</h3>
      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {student.weeklyAttendance.map((_, i) => (
              <th key={i}>Week {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {student.weeklyAttendance.map((days, i) => (
              <td key={i}>{days} days</td>
            ))}
          </tr>
        </tbody>
      </table>

      <button onClick={() => navigate(-1)} style={{ marginTop: "20px", padding: "10px 20px", background: "#3498db", color: "#fff", border: "none", borderRadius: "5px" }}>
        Go Back
      </button>
    </div>
  );
};

export default StudentDetails;
