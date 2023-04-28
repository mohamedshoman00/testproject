import React from "react";
import { Card, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import doctorImg from "../../assets/images/doctor-3.jpg";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
const PatientList = () => {
  const Categories = [
    "Name",
    "Address",
    "Disease",
    "Age",
    "Phone",
    "Email",
    "Action",
  ];
  const Patients = [
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
    },
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "Liver Disease",
      age: "22",
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
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
            <h4 className="p-3">Patients List</h4>
            <NavLink className="p-3" style={{ textDecoration: "none" }}>
              Add Patient
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
                    <td className="d-flex align-items-center">
                      <img
                        src={e.img}
                        alt=""
                        width="30px"
                        height="30px"
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
                    <td style={{ fontSize: "14px" }}>{e.address}</td>
                    <td style={{ fontSize: "14px" }}>{e.disease}</td>
                    <td style={{ fontSize: "14px" }}>{e.age}</td>
                    <td style={{ fontSize: "14px" }}>{e.phone}</td>
                    <td style={{ fontSize: "14px" }}>{e.email}</td>
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

export default PatientList;
