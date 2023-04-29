import React, { useMemo, useState } from "react";
import { Card, Table } from "react-bootstrap";
import {
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaRegTrashAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import GloblaFilter from "../Table/GloblaFilter";
import GlobalTable from "../Table/GlobalTable";
const Patient = () => {
  // const categories = [
  //   "Serial No.",
  //   "Doctor Name",
  //   "Dep Name",
  //   "Day",
  //   "Start Time",
  //   "End Time",
  //   "Status",
  //   "Action",
  // ];

  // const [doctors, setDoctors] = useState([
  //   {
  //     id: 1,
  //     name: "Ahmed",
  //     department: "Dentist",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 2,
  //     name: "mohamed",
  //     department: "ss",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 3,
  //     name: "Memo",
  //     department: "aa",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 4,
  //     name: "Zeko",
  //     department: "ff",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 5,
  //     name: "Zeko",
  //     department: "gg",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 6,
  //     name: "Zeko",
  //     department: "hh",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 7,
  //     name: "Memo",
  //     department: "xx",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 8,
  //     name: "Memo",
  //     department: "Dentist",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 9,
  //     name: "Memo",
  //     department: "Dentist",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  //   {
  //     id: 10,
  //     name: "ahmed",
  //     department: "Dentist",
  //     day: "Sunday",
  //     startTime: "9:00",
  //     endTime: "11:00",
  //     status: "Active",
  //   },
  // ]);
  // // const columns =
  // const data = useMemo(() => [...doctors], [doctors]);
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Serial No.",
  //       accessor: "id",
  //     },
  //     {
  //       Header: "Doctor Name",
  //       accessor: "name",
  //     },
  //     {
  //       Header: "Dep Name",
  //       accessor: "department",
  //     },
  //     {
  //       Header: "Day",
  //       accessor: "day",
  //     },
  //     {
  //       Header: "Start Time",
  //       accessor: "startTime",
  //     },
  //     {
  //       Header: "End Time",
  //       accessor: "endTime",
  //     },
  //     {
  //       Header: "Status",
  //       accessor: "status",
  //     },
  //     {
  //       Header: "Action",
  //       accessor: "action",
  //       Cell: ({ row }) => (
  //         <div className="d-flex">
  //           <FaPencilAlt
  //             className="me-lg-3 me-sm-2"
  //             style={{
  //               cursor: "pointer",
  //               fontSize: "20px",
  //               color: "#009efb",
  //             }}
  //             onClick={() => console.log(row.original.id)}
  //           />
  //           <FaRegTrashAlt
  //             className="me-lg-3 me-sm-2"
  //             style={{
  //               cursor: "pointer",
  //               fontSize: "20px",
  //               color: "#d9534f",
  //             }}
  //             onClick={() => console.log(row.original.id)}
  //           />
  //         </div>
  //       ),
  //     },
  //   ],
  //   []
  // );
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   preGlobalFilteredRows,
  //   setGlobalFilter,
  //   state,
  // } = useTable({ columns, data }, useGlobalFilter, useSortBy);
  return (
    <>
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Card>
          <div
            className="d-flex align-items-center justify-content-between pt-2"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h4 className="p-3">Patients List</h4>
            {/* <NavLink className="p-3" style={{ textDecoration: "none" }}>
              Add Patient
            </NavLink> */}
          </div>
          <GlobalTable />
        </Card>
      </div>
    </>
  );
};

export default Patient;

//  <div className="d-flex justify-content-end align-items-center m-2 pt-2 pe-2">
//   <GloblaFilter
//     preGlobalFilteredRows={preGlobalFilteredRows}
//     setGlobalFilter={setGlobalFilter}
//     globalFilter={state.globalFilter}
//   />
// </div>
// <div className="px-lg-3 px-sm-2 py-3">
//   <Table {...getTableProps} striped>
//     <thead
//       style={{
//         backgroundColor: "#009efb",
//         color: "#fff",
//       }}
//     >
//       {headerGroups.map((headerGroup, i) => (
//         <tr {...headerGroup.getHeaderGroupProps()}>
//           {headerGroup.headers.map((column) => (
//             <th
//               key={column.id}
//               {...column.getHeaderProps(
//                 column.getSortByToggleProps()
//               )}
//               style={{
//                 fontWeight: "500",
//                 fontSize: "18px",
//                 padding: "12px 16px",
//                 position: "relative",
//               }}
//             >
//               {column.render("Header")}
//               {column.isSorted ? (
//                 column.isSortedDesc ? (
//                   <FaArrowDown
//                     style={{
//                       marginLeft: "6px",
//                       fontSize: "16px",
//                     }}
//                   />
//                 ) : (
//                   <FaArrowUp
//                     style={{
//                       marginLeft: "6px",
//                       fontSize: "16px",
//                     }}
//                   />
//                 )
//               ) : (
//                 ""
//               )}
//             </th>
//           ))}
//         </tr>
//       ))}
//     </thead>
//     <tbody {...getTableBodyProps()}>
//       {rows.map((row) => {
//         prepareRow(row);
//         return (
//           <tr {...row.getRowProps()}>
//             {row.cells.map((cell, i) => {
//               return (
//                 <td
//                   className={i === 0 ? "ps-4" : " "}
//                   {...cell.getCellProps()}
//                   style={{
//                     padding: "15px",
//                     fontSize: "14px",
//                     padding: "16px",
//                   }}
//                 >
//                   {cell.render("Cell")}
//                 </td>
//               );
//             })}
//           </tr>
//         );
//       })}
//     </tbody>
//   </Table>
// </div>
