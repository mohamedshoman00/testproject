import React, { useMemo, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import GlobalTable from "../Table/GlobalTable";
const DoctorSchedule = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 2,
      name: "mohamed",
      department: "ss",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 3,
      name: "Memo",
      department: "aa",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 4,
      name: "Zeko",
      department: "ff",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 5,
      name: "Zeko",
      department: "gg",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 6,
      name: "Zeko",
      department: "hh",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 7,
      name: "Memo",
      department: "xx",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 8,
      name: "Memo",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 9,
      name: "Memo",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 10,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
  ]);
  const columns = useMemo(
    () => [
      {
        Header: "Serial No.",
        accessor: "id",
      },
      {
        Header: "Doctor Name",
        accessor: "name",
      },
      {
        Header: "Dep Name",
        accessor: "department",
      },
      {
        Header: "Day",
        accessor: "day",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "End Time",
        accessor: "endTime",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="d-flex">
            <FaPencilAlt
              className="me-lg-3 me-sm-2"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                color: "#009efb",
              }}
              onClick={() => console.log(row.original.id)}
            />
            <FaRegTrashAlt
              className="me-lg-3 me-sm-2"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                color: "#d9534f",
              }}
              onClick={() => console.log(row.original.id)}
            />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(() => [...doctors], [doctors]);
  return (
    <>
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Card className="w-100" style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h4 className="p-3">Schedule List</h4>
            <NavLink className="p-3" style={{ textDecoration: "none" }}>
              Add Schedule
            </NavLink>
          </div>
          <GlobalTable data={data} columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default DoctorSchedule;
