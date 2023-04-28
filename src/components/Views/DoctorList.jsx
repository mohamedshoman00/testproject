import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  NavLink,
  Table,
} from "react-bootstrap";
import doctorImg from "../../assets/images/doctor-3.jpg";
import { ImLocation } from "react-icons/im";
import { HiDotsVertical, HiCheck } from "react-icons/hi";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { hover } from "@testing-library/user-event/dist/hover";
import { motion } from "framer-motion";
const DoctorList = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 2,
      img: doctorImg,
      name: "Mohamed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 3,
      img: doctorImg,
      name: "Zeko",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 4,
      img: doctorImg,
      name: "Emad",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
    {
      id: 5,
      img: doctorImg,
      name: "Abdo",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 6,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
    {
      id: 7,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: false,
      showDetails: false,
    },
    {
      id: 8,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
    {
      id: 9,
      img: doctorImg,
      name: "Ahmed",
      jopTitle: "Dentist",
      location: "United States, San Francisco",
      isActive: true,
      showDetails: false,
    },
  ]);
  const handleDetails = (ele) => {
    const doctor = [...doctors];
    const i = doctor.findIndex((e) => e.id === ele.id);
    doctor[i] = { ...doctor[i], showDetails: !doctor[i].showDetails };
    setDoctors(doctor);
  };
  return (
    <>
      <div
        className="w-100"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        {/* Doctors List */}
        <div className="w-100 d-flex flex-wrap">
          {doctors.map((e, i) => (
            <Col lg={4} md={4} sm={6} className="px-3 px-sm-2" key={i}>
              <Card style={{ marginBottom: "2rem" }}>
                <div className="d-flex p-3" style={{ position: "relative" }}>
                  <div className="mb-3 w-100">
                    <div className="d-flex align-items-center">
                      <img
                        src={doctorImg}
                        alt="GG"
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%", marginRight: "8px" }}
                      />
                      <div className="content w-100">
                        <h6
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {e.name}
                        </h6>
                        <p
                          className="my-1"
                          style={{
                            fontSize: "12px",
                            color: "#878793",
                          }}
                        >
                          {e.jopTitle}
                        </p>
                        <p
                          className="mt-2 d-flex align-items-center"
                          style={{
                            fontWeight: "500",
                            fontSize: "13px",
                            margin: "0",
                          }}
                        >
                          <ImLocation style={{ fontSize: "12px" }} />
                          {e.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <HiDotsVertical
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDetails(e)}
                    />
                    {e.showDetails ? (
                      <motion.div
                        style={{
                          position: "absolute",
                          top: "40px",
                          zIndex: "1000",
                          borderRadius: "4px",
                          color: "#212529",
                        }}
                        initial={{ right: "-30px" }}
                        animate={{ right: "20px", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ListGroup>
                          <ListGroupItem
                            className="list-nav"
                            style={{
                              padding: 0,
                              width: "145px",
                              padding: "0.5rem 0",
                              margin: "0.125rem 0",
                            }}
                          >
                            <NavLink
                              className="p-2"
                              style={{ fontSize: "12px", color: "#34334a" }}
                            >
                              View Details
                            </NavLink>
                            <NavLink
                              className="p-2"
                              style={{ fontSize: "12px", color: "#34334a" }}
                            >
                              Edit
                            </NavLink>
                            <NavLink
                              className="p-2"
                              style={{ fontSize: "12px", color: "#34334a" }}
                            >
                              Delete
                            </NavLink>
                          </ListGroupItem>
                        </ListGroup>
                      </motion.div>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </div>
        <div className="d-flex flex-lg-row flex-sm-column">
          {/* Doctors Requests Approve Or Not */}
          <Card
            className="col-lg-7  col-sm-12 p-3 mx-lg-3 mx-sm-2"
            style={{ backgroundColor: "#fff" }}
          >
            <h4>Doctors Requests</h4>
            <Table>
              <thead>
                <tr>
                  <th
                    className="col-8"
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    Doctor
                  </th>
                  <th
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    Approve/Reject
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((e, i) => (
                  <tr key={i}>
                    <td className="col-8">
                      <div className="d-flex align-items-center">
                        <img
                          src={doctorImg}
                          alt="GG"
                          width="50px"
                          height="50px"
                          style={{ borderRadius: "50%", marginRight: "8px" }}
                        />
                        <div className="content w-100">
                          <h6
                            style={{
                              fontWeight: "500",
                              fontSize: "17px",
                              margin: "0",
                            }}
                          >
                            {e.name}
                          </h6>
                          <p
                            className="my-1"
                            style={{
                              fontSize: "14px",
                              color: "#878793",
                            }}
                          >
                            {e.jopTitle}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-isActive"
                        style={{
                          marginRight: "15px",
                        }}
                      >
                        <HiCheck style={{ fontSize: "18px" }} />
                      </Button>
                      <Button variant="danger">
                        <AiOutlineClose style={{ fontSize: "18px" }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          {/* isActive & isNotActive List */}
          <Card
            className="col-lg-4 col-sm-12 p-3 mt-lg-0 mt-sm-3 mx-sm-2 "
            style={{ backgroundColor: "#fff" }}
          >
            <h4
              style={{
                fontSize: "18px",
                padding: "5px 20px 10px",
              }}
            >
              ACTIVE/INACTIVE DOCTORS
            </h4>
            <ListGroup>
              {doctors.map((e, i) => (
                <ListGroup.Item
                  key={i}
                  className="py-2"
                  style={{
                    border: 0,
                    borderBottom: "1px solid rgba(0, 0, 0, .1)",
                    borderRadius: 0,
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={doctorImg}
                      alt="GG"
                      width="40px"
                      height="40px"
                      style={{ borderRadius: "50%", marginRight: "8px" }}
                    />
                    <div className="content w-100">
                      <h6
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          margin: "0",
                        }}
                      >
                        {e.name}
                      </h6>
                      <p
                        className="my-1"
                        style={{
                          fontSize: "12px",
                          color: "#878793",
                        }}
                      >
                        {e.jopTitle}
                      </p>
                    </div>
                    <Button
                      className={
                        e.isActive ? "btn-isActive" : "btn-isNotActive"
                      }
                    >
                      {e.isActive ? (
                        <HiCheck style={{ fontSize: "20px" }} />
                      ) : (
                        <IoPersonAddSharp style={{ fontSize: "20px" }} />
                      )}
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
