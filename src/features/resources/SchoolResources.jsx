import React from 'react';
import './SchoolResources.css';

const resources = [
  {
    title: 'Assignments',
    description: 'View and submit class-wise assignments.',
    link: '/assignments',
    icon: '📘'
  },
  {
    title: 'Study Materials',
    description: 'Access PDFs, videos, and notes by subject.',
    link: '/study-materials',
    icon: '📚'
  },
  {
    title: 'Timetable',
    description: 'Check your daily class schedule.',
    link: '/timetable',
    icon: '🕒'
  },
  {
    title: 'Exams',
    description: 'Upcoming exam dates and results.',
    link: '/exams',
    icon: '📝'
  }
];

const SchoolResources = () => {
  return (
    <div className="school-resources">
      <h2>📦 School Resources</h2>
      <div className="resources-grid">
        {resources.map((item, index) => (
          <a key={index} href={item.link} className="resource-card">
            <div className="resource-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SchoolResources;
