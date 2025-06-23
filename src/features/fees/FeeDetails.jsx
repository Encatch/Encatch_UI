import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FeeDetails = () => {
  const { id } = useParams();
  const feeData = {
    1: { studentName: 'Alice', className: '10A', age: 15, year: 2025, amount: 500, dueDate: '2025-07-01' },
    2: { studentName: 'Bob', className: '9B', age: 14, year: 2025, amount: 750, dueDate: '2025-07-10' },
  };

  const fee = feeData[parseInt(id)];

  return (
    <div style={{ padding: '20px' }}>
      <h2>📄 Fee Summary</h2>
      {fee ? (
        <>
          <p><strong>Name:</strong> {fee.studentName}</p>
          <p><strong>Class:</strong> {fee.className}</p>
          <p><strong>Age:</strong> {fee.age}</p>
          <p><strong>Academic Year:</strong> {fee.year}</p>
          <p><strong>Amount:</strong> ₹{fee.amount}</p>
          <p><strong>Due Date:</strong> {fee.dueDate}</p>
        </>
      ) : (
        <p>Student not found.</p>
      )}
      <Link to="/fees">
        <button style={{ marginTop: '10px' }}>🔙 Back</button>
      </Link>
    </div>
  );
};

export default FeeDetails;
