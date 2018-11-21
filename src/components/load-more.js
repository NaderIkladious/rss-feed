import React from "react";

export const LoadMore = ({ handleClick }) => (
  <div className="load-more text-center">
    <a
      href="/"
      className="btn btn-outline-secondary custom-btn"
      onClick={handleClick}
    >
      Load More
    </a>
  </div>
);
