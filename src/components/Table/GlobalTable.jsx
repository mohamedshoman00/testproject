import React, { useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import {
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import GloblaFilter from "./GloblaFilter";
const GlobalTable = ({ data, columns }) => {
  // // const columns =
  // const data = useMemo(() => [...doctors], [doctors]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  return (
    <>
      <div className="d-flex justify-content-end align-items-center m-2 pt-2 pe-2">
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
            {rows.map((row) => {
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
      </div>
    </>
  );
};

export default GlobalTable;
