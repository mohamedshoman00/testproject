import React from "react";
import { Col, Container } from "react-bootstrap";
import SignUp from "../components/Login/SignUp";
import Panel from "../components/Login/Panel";
import background1 from "../assets/images/background1.jpg";
import Login from "../components/Login/Login";
const FormLogin = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex gap-lg-4"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <Col className={`col-lg-6 small-hidden`}>
          <Panel />
        </Col>
        <Login />
        <SignUp />
      </Container>
    </>
  );
};

export default FormLogin;
