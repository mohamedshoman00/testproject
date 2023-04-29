import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./components/Views/DashBoard";
import FormLogin from "./pages/FormLogin";
import { AnimatePresence } from "framer-motion";
import ForgotPassword from "./components/Login/ForgotPassword";
import Admin from "./pages/Admin";
import UserProfile from "./components/Views/UserProfile";
import DoctorList from "./components/Views/DoctorList";
import PatientList from "./components/Views/PatientList";
import DoctorSchedule from "./components/Views/DoctorSchedule";
import AppointmentList from "./components/Views/AppointmentList";
import Patient from "./components/Views/Patient";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Admin />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/doctor" element={<DoctorList />} />
            <Route path="/patient" element={<PatientList />} />
            <Route path="/doctor-schedule" element={<DoctorSchedule />} />
            <Route path="/appointment-list" element={<AppointmentList />} />
          </Route>
          <Route path="/login" element={<FormLogin />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
