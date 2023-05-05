import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Card, Container, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../redux/actions/appAction";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { motion } from "framer-motion";
const Login1 = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema1 = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });
  const fields = [
    {
      style: { width: "100%" },
      type: "email",
      label: "Email",
      name: "email",
    },
    {
      style: { width: "100%" },
      type: "password",
      label: "Password",
      name: "password",
    },
  ];
  const nav = useNavigate();
  const handleS = (e) => {
    console.log(e);
    nav("/admin");
  };
  return (
    <>
      <Col className={`col-lg-6 col-md-12 col-sm-12`}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <motion.div
            initial={{ left: islogin ? "-50%" : "", opacity: 0 }}
            animate={{
              left: islogin ? "" : "-50%",
              opacity: islogin ? "1" : "0",
            }}
            transition={{ duration: 1.2, delay: 1 }}
            className="d-flex justify-content-center align-items-center login-small-window"
            style={{
              position: "absolute",
              width: "50%",
              zIndex: "1",
            }}
          >
            <Card className="form-card">
              <h2
                className="mb-2 mt-4 w-100 text-center"
                style={{
                  fontSize: "2rem",
                  color: "#444",
                }}
              >
                Log In
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema1}
                onSubmit={handleS}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form
                    className="d-flex flex-wrap justify-content-between text-center p-3 gap-2"
                    style={{ width: "370px" }}
                    onSubmit={handleSubmit}
                  >
                    {fields.map((e, i) => (
                      <Field
                        className="mb-2"
                        key={i}
                        style={e.style}
                        type={e.type}
                        name={e.name}
                        component={TextField}
                        label={e.label}
                        variant="standard"
                      />
                    ))}
                    <Button
                      type="submit"
                      variant="info"
                      className="col-2 btn-style mt-4 w-100 p-2"
                      style={{
                        color: "#fff",
                      }}
                    >
                      Login
                    </Button>
                    <div className="w-100 text-center mt-2 mb-2">
                      <NavLink
                        to="/forgot-password"
                        state={{
                          fontSize: "16px",
                        }}
                        onClick={(e) => {
                          dispatch(toggleLogin());
                        }}
                      >
                        Forgot Password
                      </NavLink>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card>
            <div
              className="w-100 text-center mt-2 small-text"
              style={{
                display: "none",
              }}
            >
              New here?
              <NavLink
                className="ms-1"
                onClick={(e) => {
                  dispatch(toggleLogin());
                }}
              >
                Sign Up
              </NavLink>
            </div>
          </motion.div>
        </Container>
      </Col>
    </>
  );
};

export default Login1;
