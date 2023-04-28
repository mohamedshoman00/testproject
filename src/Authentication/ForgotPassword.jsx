import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../redux/actions/appAction";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#fff",
          height: "100vh",
        }}
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ left: 0, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="d-flex justify-content-center flex-column align-items-center"
          style={{ width: "100%", zIndex: "1" }}
        >
          <Card style={{ borderRadius: "25px" }}>
            <Form
              className="d-flex flex-wrap justify-content-between text-center p-3 gap-2"
              style={{ width: "400px" }}
            >
              <h2
                className="mb-4 mt-2 w-100"
                style={{
                  fontSize: "2.2rem",
                  color: "#444",
                }}
              >
                Reset Password
              </h2>
              <Form.Group className="input-field w-100" controlId="email">
                <Form.Label>
                  <i className="fa-solid fa-user"></i>
                </Form.Label>
                <Form.Control type="test" placeholder="Email address" />
              </Form.Group>
              <Button
                size="lg"
                type="submit"
                variant="info"
                className="col-2 mt-2 btn-style w-100 mb-4"
              >
                Reset Password
              </Button>
            </Form>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?
            <NavLink
              className="ms-1"
              to="/"
              onClick={() => {
                dispatch(toggleLogin());
              }}
            >
              Sign In
            </NavLink>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default ForgotPassword;
