import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')} className="filter-btn">All</button>
      <button onClick={() => setFilter('completed')} className="filter-btn">Completed</button>
      <button onClick={() => setFilter('pending')} className="filter-btn">Pending</button>
    </div>
  );
};

export default Filter;
