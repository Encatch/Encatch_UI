// Circulars.jsx
import React from 'react';
import './Circulars.css'; // Optional CSS for styling

const circularData = [
  {
    title: 'Mid-Term Exam Schedule',
    date: '2025-06-10',
    description: 'Mid-term exams will start from 20th June. Please check the timetable on the notice board.',
  },
  {
    title: 'Holiday Notice',
    date: '2025-06-15',
    description: 'The school will remain closed on 17th June due to a local festival.',
  },
  {
    title: 'Holiday Notice',
    date: '2025-06-15',
    description: 'The school will remain closed on 17th June due to a local festival.',
  },
  {
    title: 'Holiday Notice',
    date: '2025-06-15',
    description: 'The school will remain closed on 17th June due to a local festival.',
  },
  {
    title: 'Fee Payment Reminder',
    date: '2025-06-12',
    description: 'Parents are requested to clear the tuition fee for the quarter by 25th June.',
  },
  {
    title: 'Annual Sports Day',
    date: '2025-06-05',
    description: 'Annual Sports Day will be held on 30th June. Students should register by 20th June.',
  },
  {
    title: 'Annual Sports Day',
    date: '2025-06-05',
    description: 'Annual Sports Day will be held on 30th June. Students should register by 20th June.',
  },
];

const Circulars = () => {
  return (
    <div className="circulars-container">
      <h2 className="circulars-heading">School Circulars</h2>
      <ul className="circulars-list">
        {circularData.map((circular, index) => (
          <li key={index} className="circular-card">
            <h3>{circular.title}</h3>
            <p><strong>Date:</strong> {circular.date}</p>
            <p>{circular.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Circulars;
