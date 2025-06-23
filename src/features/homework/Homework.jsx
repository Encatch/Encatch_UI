import React from 'react';
import './Homework.css';

const classList = [
  { name: 'Class 1', colorClass: 'class-1' },
  { name: 'Class 2', colorClass: 'class-2' },
  { name: 'Class 3', colorClass: 'class-3' },
  { name: 'Class 4', colorClass: 'class-4' },
  { name: 'Class 5', colorClass: 'class-5' },
  { name: 'Class 6', colorClass: 'class-6' },
  { name: 'Class 7', colorClass: 'class-7' },
  { name: 'Class 8', colorClass: 'class-8' },
  { name: 'Class 9', colorClass: 'class-9' },
  { name: 'Class 10', colorClass: 'class-10' },
];

const Homework = () => {
  return (
    <div className="homework-container">
      <h1 className="title">Homework Circular</h1>
      <div className="class-list">
        {classList.map((cls, index) => (
          <div key={index} className={`class-box ${cls.colorClass}`}>
            {cls.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homework;
