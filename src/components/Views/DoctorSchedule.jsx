import React from "react";
import { Card, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
const DoctorSchedule = () => {
  const categories = [
    "Serial No.",
    "Doctor Name",
    "Dep Name",
    "Day",
    "Start Time",
    "End Time",
    "Status",
    "Action",
  ];
  const doctors = [
    {
      id: 1,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 2,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 3,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 4,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 5,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 6,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 7,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 8,
      name: "ahmed",
      department: "Dentist",
      day: "Sunday",
      startTime: "9:00",
      endTime: "11:00",
      status: "Active",
    },
    {
      id: 9,
      name: "ahmed",
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
  ];
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
          <div className="px-lg-3 px-sm-2 py-3">
            <Table
              className="table-padding"
              striped
              style={{ borderRadius: "50px", maxWidth: "100%" }}
            >
              <thead style={{ backgroundColor: "#009efb" }}>
                <tr style={{ position: "relative" }}>
                  {categories.map((e, i) => (
                    <th style={{ fontWeight: "500", color: "#fff" }} key={i}>
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doctors.map((e, i) => (
                  <tr className="light" key={i}>
                    <td style={{ fontSize: "14px", paddingLeft: "35px" }}>
                      {e.id}
                    </td>
                    <td style={{ fontSize: "14px" }}>{e.name}</td>
                    <td style={{ fontSize: "14px" }}>{e.department}</td>
                    <td style={{ fontSize: "14px" }}>{e.day}</td>
                    <td style={{ fontSize: "14px" }}>{e.startTime}</td>
                    <td style={{ fontSize: "14px" }}>{e.endTime}</td>
                    <td style={{ fontSize: "14px" }}>{e.status}</td>
                    <td>
                      <div className="d-flex">
                        <FaPencilAlt
                          className="me-lg-3 me-sm-2"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "#009efb",
                            // marginRight: "15px",
                          }}
                        />
                        <FaRegTrashAlt
                          className="me-lg-3 me-sm-2"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "#d9534f",
                            // marginRight: "15px",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DoctorSchedule;
