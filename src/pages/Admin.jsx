import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import { BsPieChart } from "react-icons/bs";
import {
  FaCheckSquare,
  FaListAlt,
  FaStethoscope,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Admin = () => {
  const menu = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <BsPieChart />,
    },
    {
      path: "/user-profile",
      name: "User profile",
      icon: <FaUserCircle />,
    },
    {
      path: "/doctor",
      name: "Doctors List",
      icon: <FaStethoscope />,
    },
    {
      path: "/patient",
      name: "Patients List",
      icon: <FaUserAlt />,
    },
    {
      path: "/doctor-schedule",
      name: "Doctors Schedule",
      icon: <FaListAlt />,
    },
    {
      path: "/appointment-list",
      name: "Appointment List",
      icon: <FaCheckSquare />,
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="d-flex" style={{ position: "relative" }}>
        <Sidebar isOpen={isOpen} menu={menu} />
        <motion.div
          animate={{
            left: isOpen ? "250px" : "70px",
            width: isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)",
            opacity: 1,
          }}
          style={{
            position: "relative",
            // width: isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)",
          }}
        >
          <AdminNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default Admin;
