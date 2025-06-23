import React, { useState } from 'react';
import '../styles/calendar.css';

const schoolEvents = [
  { date: '2025-06-10', title: 'Math Exam' },
  { date: '2025-06-14', title: 'Science Fair' },
  { date: '2025-06-19', title: 'Parent Meeting' },
  { date: '2025-06-25', title: 'Holiday - Summer Break' },
];

const CalendarApp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');

  const getMonthMatrix = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const matrix = [];
    let week = [];
    let day = 1;

    for (let i = 0; i < startDay; i++) week.push(null);

    for (let i = 0; i < totalDays; i++) {
      week.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
      day++;
    }

    while (week.length < 7) week.push(null);
    matrix.push(week);

    return matrix;
  };

  const formatDate = (date) => date.toISOString().split('T')[0];

  const findEvent = (date) => {
    const dStr = formatDate(date);
    return schoolEvents.find(e => e.date === dStr);
  };

  const goToPreviousMonth = () => {
    const prev = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prev);
  };

  const goToNextMonth = () => {
    const next = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(next);
  };

  const monthMatrix = getMonthMatrix();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="calendar-container">
      <div className="header">
        <h2>📚 School Calendar</h2>

        <div className="view-buttons-horizontal centered-buttons">
          <button onClick={() => setViewMode('day')}>Day</button>
          <button onClick={() => setViewMode('week')}>Week</button>
          <button onClick={() => setViewMode('month')}>Month</button>
        </div>

        <div className="button-group centered-buttons">
          <button onClick={goToPreviousMonth}>◀ Prev</button>
          <h3>{monthName} {year}</h3>
          <button onClick={goToNextMonth}>Next ▶</button>
        </div>
      </div>

      <div className="calendar-layout">
        <div className="mini-calendar">
          <h4>Mini Calendar</h4>
          <table className="mini-calendar-table">
            <thead>
              <tr>
                <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
              </tr>
            </thead>
            <tbody>
              {monthMatrix.map((week, i) => (
                <tr key={i}>
                  {week.map((date, idx) => (
                    <td key={idx} className={date ? 'mini-cell' : ''}>
                      {date?.getDate() || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="main-content calendar-box">
          {viewMode === 'month' && (
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {monthMatrix.map((week, i) => (
                  <tr key={i}>
                    {week.map((date, idx) => (
                      <td key={idx} className={date ? 'active-cell' : ''}>
                        {date && (
                          <>
                            <div className="date-number">{date.getDate()}</div>
                            <div className="event-text">
                              {findEvent(date)?.title || ''}
                            </div>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {viewMode === 'week' && <div className="week-view">📅 Week View Placeholder</div>}
          {viewMode === 'day' && <div className="day-view">📆 Day View Placeholder</div>}
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
