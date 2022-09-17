import React from "react";
import { getPagesArray } from "../../../utils/page";

const Pagination = ({totalPages, changePage, page}) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div
      style={{
        margin: "20px 0px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pagesArray.map((p) => (
        <span
          className={page === p ? 'page page__current' : 'page'}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
