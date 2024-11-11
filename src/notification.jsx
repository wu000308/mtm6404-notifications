import React from 'react';

const Notification = ({ id, name, onClear, children }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-start">
      <div>
        <h5 className="mb-1">{name}</h5>
        <p className="mb-1">{children}</p>
      </div>
      <button className="btn btn-outline-danger" onClick={() => onClear(id)}>Clear</button>
    </div>
  );
};

export default Notification;
