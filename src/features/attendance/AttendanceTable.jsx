import React, { useState } from "react";

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    class: "Grade 2",
    year: "2024-25",
    totalDays: 30,
    presentDays: 28,
    weeklyAttendance: [5, 4, 5, 5, 4, 5],
  },
  {
    id: 2,
    name: "Diya Mehra",
    class: "Grade 1",
    year: "2024-25",
    totalDays: 30,
    presentDays: 25,
    weeklyAttendance: [4, 4, 3, 5, 4, 5],
  },
  {
    id: 3,
    name: "Rohan Patel",
    class: "Grade 3",
    year: "2024-25",
    totalDays: 30,
    presentDays: 30,
    weeklyAttendance: [5, 5, 5, 5, 5, 5],
  },
  {
    id: 4,
    name: "Chaitanya",
    class: "Grade 1",
    year: "2024-25",
    totalDays: 30,
    presentDays: 27,
    weeklyAttendance: [5, 5, 5, 4, 4, 4],
  },
   {
    id: 5,
    name: "Prashanth Reddy",
    class: "Grade 2",
    year: "2024-25",
    totalDays: 30,
    presentDays: 28,
    weeklyAttendance: [4, 5, 5, 4, 5, 5],
  },
   {
    id: 6,
    name: "Pragna Joshi",
    class: "Grade 3",
    year: "2024-25",
    totalDays: 30,
    presentDays: 27,
    weeklyAttendance: [4, 4, 5, 4, 5, 5],
  },
   {
    id: 6,
    name: "Pragna ",
    class: "Grade 3",
    year: "2024-25",
    totalDays: 30,
    presentDays: 27,
    weeklyAttendance: [4, 4, 5, 4, 5, 5],
  },
  {
    id: 7,
    name: "Sai Sri ",
    class: "Grade 1",
    year: "2024-25",
    totalDays: 30,
    presentDays: 26,
    weeklyAttendance: [3, 4, 4, 5, 5, 5],
  },
  {
    id: 8,
    name: "Saketh reddy",
    class: "Grade 2",
    year: "2024-25",
    totalDays: 30,
    presentDays: 29,
    weeklyAttendance: [5, 5, 5, 5, 4, 5],
  },
  {
    id: 9,
    name: "Bhavya reddy",
    class: "Grade 3",
    year: "2024-25",
    totalDays: 30,
    presentDays: 27,
    weeklyAttendance: [4, 4, 5, 4, 5, 5],
  },
];

const AttendanceTable = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "24px", color: "#2c3e50" }}>Attendance Table</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498db", color: "white" }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Student Name</th>
            <th style={cellStyle}>Present Days</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              <td style={cellStyle}>{student.id}</td>
              <td style={cellStyle}>{student.name}</td>
              <td style={cellStyle}>{student.presentDays}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Popup */}
      {selectedStudent && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3 style={{ marginBottom: "15px" }}>Student Details</h3>
            <p><strong>ID:</strong> {selectedStudent.id}</p>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Class:</strong> {selectedStudent.class}</p>
            <p><strong>Academic Year:</strong> {selectedStudent.year}</p>
            <p><strong>Total Days:</strong> {selectedStudent.totalDays}</p>
            <p><strong>Present Days:</strong> {selectedStudent.presentDays}</p>
            <p><strong>Attendance %:</strong> {((selectedStudent.presentDays / selectedStudent.totalDays) * 100).toFixed(1)}%</p>

            <h4 style={{ marginTop: "15px" }}>Weekly Attendance:</h4>
            <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
              {selectedStudent.weeklyAttendance.map((days, i) => (
                <li key={i}>Week {i + 1}: {days} days</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedStudent(null)}
              style={buttonStyle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const cellStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex", justifyContent: "center", alignItems: "center",
  zIndex: 999,
};

const modalStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  width: "320px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AttendanceTable;
