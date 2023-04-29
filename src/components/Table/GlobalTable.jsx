import React, { useMemo, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import {
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaRegTrashAlt,
} from "react-icons/fa";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import GloblaFilter from "./GloblaFilter";
import ReactPaginate from "react-paginate";
const GlobalTable = ({ data, columns }) => {
  // // const columns =
  // const data = useMemo(() => [...doctors], [doctors]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    page,
    pageOptions,
    rows,
    setPageSize,
    gotoPage,
    pageCount,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
  const { pageIndex, pageSize } = state;
  const handlePageClick = (e) => {
    gotoPage(e.selected);
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-2 pt-2 pe-2">
        <div
          className="d-flex align-items-center ps-3"
          style={{ fontSize: "16px" }}
        >
          Show
          <Form.Select
            style={{
              marginLeft: "10px",
              width: "70px",
              borderRadius: "15px",
            }}
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Form.Select>
        </div>
        <GloblaFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
      </div>
      <div className="px-lg-3 px-sm-2 py-3">
        <Table {...getTableProps} striped>
          <thead
            style={{
              backgroundColor: "#009efb",
              color: "#fff",
            }}
          >
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      padding: "12px 16px",
                      cursor: "pointer",
                    }}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaArrowDown
                          style={{
                            marginLeft: "6px",
                            fontSize: "16px",
                          }}
                        />
                      ) : (
                        <FaArrowUp
                          style={{
                            marginLeft: "6px",
                            fontSize: "16px",
                          }}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        className={i === 0 ? "ps-4" : " "}
                        {...cell.getCellProps()}
                        style={{
                          padding: "15px",
                          fontSize: "14px",
                          padding: "16px",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        {pageCount > 1 && (
          <div className="d-flex justify-content-between align items-center  px-4">
            <span>
              Page {pageIndex + 1} of {pageOptions.length}
            </span>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="Previous"
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"
              breakClassName="page-item"
              breakLinkClassName="page-link"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalTable;
