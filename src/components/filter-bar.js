import React from "react";

export const FilterBar = ({ value, count, handleChange }) => (
  <div className="form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Filter Feed"
      value={value}
      onChange={handleChange}
    />
    <small className="form-text text-muted">
      Filter the results based on your input - {count} resutls
    </small>
  </div>
);
