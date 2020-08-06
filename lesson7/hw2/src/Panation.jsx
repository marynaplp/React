// describes the components which accepts in Properties  goPrev- function to turn on the previous page, goNext - function to turn on the next page, currentPage- current page, totalItems - all elements in the list;  
import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvaible = currentPage === 0;
  const isNextPageAvaible =
    currentPage === (totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
        {isPrevPageAvaible ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvaible}>
        {isNextPageAvaible ? "" : "→"}
      </button>
    </div>
  );
};
export default Pagination;