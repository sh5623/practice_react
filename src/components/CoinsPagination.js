import React from "react";
import { useState, useEffect } from "react";

function CoinsPagination({ coinsPerPage, totalCoins, currentPage, paginate }) {
  const [pageNumber, setPageNumber] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [perPage] = useState(10);
  const [indexOfLastPages, setIndexOfLastPages] = useState(0);
  const [indexOfFirstPages, setIndexOfFirstPages] = useState(0);
  const [pages, setPages] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const chagnePage = (value) => {
    if (value === 1) {
      if (
        Math.ceil(totalCoins / coinsPerPage) !==
        pageNumber.slice(indexOfFirstPages, indexOfLastPages)[
          pageNumber.slice(indexOfFirstPages, indexOfLastPages).length - 1
        ]
      ) {
        setCurrentPages((current) => current + 1);
        paginate(indexOfLastPages + 1);
      }
    } else if (value === -1) {
      if (indexOfFirstPages !== 0) {
        setCurrentPages((current) => current - 1);
        paginate(indexOfFirstPages - perPage + 1);
      }
    }
  };

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
      setPageNumber((currentArray) => [...currentArray, i]);
    }

    setCurrentPages(1);
  }, []);

  useEffect(() => {
    if (indexOfFirstPages === 0) setIsFirstPage(true);
    else setIsFirstPage(false);
    if (
      Math.ceil(totalCoins / coinsPerPage) ===
      pageNumber.slice(indexOfFirstPages, indexOfLastPages)[
        pageNumber.slice(indexOfFirstPages, indexOfLastPages).length - 1
      ]
    )
      setIsLastPage(true);
    else setIsLastPage(false);
    setIndexOfLastPages(currentPages * perPage);
    setIndexOfFirstPages(indexOfLastPages - perPage);

    setPages(pageNumber.slice(indexOfFirstPages, indexOfLastPages));
  }, [currentPages, indexOfFirstPages, indexOfLastPages]);

  return (
    <nav>
      <ul className="pagination">
        <button
          onClick={() => chagnePage(-1)}
          className={`left-button-${isFirstPage}`}
          disabled={isFirstPage}
        >{`<`}</button>
        {pages.map((pageNum) => (
          <li
            key={pageNum}
            onClick={() => paginate(pageNum)}
            className={
              pageNum === currentPage ? "page-active-item" : "page-item"
            }
          >
            <a href="javascript:void(0);">{pageNum}</a>
          </li>
        ))}
        <button
          onClick={() => chagnePage(1)}
          className={`right-button-${isLastPage}`}
          disabled={isLastPage}
        >{`>`}</button>
      </ul>
    </nav>
  );
}

export default CoinsPagination;
