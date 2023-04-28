import React from "react";
import { Card, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import doctorImg from "../../assets/images/doctor-3.jpg";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
const AppointmentList = () => {
  const Categories = [
    "ID",
    "Patient Name",
    "Age",
    "Doctor Name",
    "Department",
    "Date",
    "Time",
    "Disease",
    "Action",
  ];
  const Patients = [
    {
      id: 1,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 2,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 3,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 4,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 5,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 6,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 7,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 8,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 9,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
    },
    {
      id: 10,
      name: "ahmed",
      age: "22",
      doctorName: "Zeko",
      department: "Dentist",
      date: "11 Dec 2020",
      time: "10:00am-12:00am",
      disease: "cold",
      img: doctorImg,
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
        <Card>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h4 className="p-3">Appointment List</h4>
            <NavLink className="p-3" style={{ textDecoration: "none" }}>
              Add Appointment
            </NavLink>
          </div>
          <div className="px-5 py-3">
            <Table
              className="table-padding"
              striped
              style={{ borderRadius: "50px" }}
            >
              <thead style={{ backgroundColor: "#009efb" }}>
                <tr style={{ position: "relative" }}>
                  {Categories.map((e, i) => (
                    <th style={{ fontWeight: "500", color: "#fff" }} key={i}>
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Patients.map((e, i) => (
                  <tr className="light" key={i}>
                    <td style={{ fontSize: "14px" }}>{e.id}</td>
                    <td className="d-flex align-items-center">
                      <img
                        src={e.img}
                        alt=""
                        width="25px"
                        height="25px"
                        style={{ borderRadius: "50%", marginRight: "10px" }}
                      />
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          margin: "0",
                        }}
                      >
                        {e.name}
                      </p>
                    </td>
                    <td style={{ fontSize: "14px" }}>{e.age}</td>
                    <td style={{ fontSize: "14px" }}>{e.doctorName}</td>
                    <td style={{ fontSize: "14px" }}>{e.department}</td>
                    <td style={{ fontSize: "14px" }}>{e.date}</td>
                    <td style={{ fontSize: "14px" }}>{e.time}</td>
                    <td style={{ fontSize: "14px" }}>{e.disease}</td>
                    <td>
                      <FaPencilAlt
                        style={{
                          cursor: "pointer",
                          fontSize: "20px",
                          color: "#009efb",
                          marginRight: "15px",
                        }}
                      />
                      <FaRegTrashAlt
                        style={{
                          cursor: "pointer",
                          fontSize: "20px",
                          color: "#d9534f",
                          marginRight: "15px",
                        }}
                      />
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

export default AppointmentList;
