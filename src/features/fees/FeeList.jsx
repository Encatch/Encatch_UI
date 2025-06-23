import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FeesList = () => {
  const [fees, setFees] = useState([
    { id: 1, studentName: 'Alice', className: '10A', age: 15, year: 2025, amount: 500, dueDate: '2025-07-01' },
    { id: 2, studentName: 'Bob', className: '9B', age: 14, year: 2025, amount: 750, dueDate: '2025-07-10' },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    age: '',
    year: '',
    amount: '',
    dueDate: '',
  });

  const navigate = useNavigate();

  const handleAddClick = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newId = fees.length + 1;
    const newFee = { id: newId, ...formData };
    setFees([...fees, newFee]);
    setFormData({ studentName: '', className: '', age: '', year: '', amount: '', dueDate: '' });
    setShowPopup(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🏫 School Fees Structure</h2>
      <button onClick={handleAddClick}>➕ Add New Fee</button>

      <table border="1" style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Year</th>
            <th>Amount</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {fees.map(fee => (
            <tr key={fee.id}>
              <td>{fee.id}</td>
              <td>
                <Link to={`/fee/${fee.id}`}>{fee.studentName}</Link>
              </td>
              <td>{fee.className}</td>
              <td>{fee.year}</td>
              <td>₹{fee.amount}</td>
              <td>{fee.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div style={{
          position: 'fixed', top: '20%', left: '35%', backgroundColor: '#fff',
          border: '1px solid #ccc', padding: '20px', zIndex: 1000
        }}>
          <h3>Add Student Fee</h3>
          {['studentName', 'className', 'age', 'year', 'amount', 'dueDate'].map(field => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              />
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleClose} style={{ marginLeft: '10px' }}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default FeesList;
