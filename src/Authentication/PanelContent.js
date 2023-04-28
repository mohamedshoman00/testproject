import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../redux/actions/appAction";
import panelCover1 from "../assets/images/image1.svg";
import panelCover2 from "../assets/images/image2.svg";
const PanelContent = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.loginOrRegister);
  return (
    <>
      <motion.div
        initial={{ right: islogin ? "100%" : "48%", opacity: 0 }}
        animate={{ right: islogin ? "48%" : "120%", opacity: 1 }}
        transition={{
          duration: islogin ? "1.2" : "0.5",
          delay: 0.8,
        }}
        className="content d-flex flex-column align-items-center text-center"
        style={{
          padding: "100px",
          width: "50%",
          position: "absolute",
          zIndex: "10",
        }}
      >
        <h3
          style={{
            fontWeight: "700",
            lineHeight: "1",
            color: "#444",
          }}
        >
          New here?
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            padding: "0.7rem 0",
            color: "#444",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure.
          Error, eos! Atque quam magni vitae veritatis temporibus
        </p>
        <Button
          variant="info"
          size="lg"
          className="col-2 mt-2 btn-style"
          style={{
            color: "white",
            border: "2px solid #fff",
          }}
          onClick={() => {
            dispatch(toggleLogin());
          }}
        >
          Sign Up
        </Button>
        <img
          src={panelCover1}
          alt=""
          style={{
            width: "90%",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ left: islogin ? "100%" : "100%", opacity: 0 }}
        animate={{ left: islogin ? "100%" : "50%", opacity: 1 }}
        transition={{ duration: islogin ? "0.5" : "1.2", delay: 0.8 }}
        className="content d-flex flex-column align-items-center text-center"
        style={{
          padding: "100px",
          width: "50%",
          position: "absolute",
          zIndex: "10",
        }}
      >
        <h3
          style={{
            fontWeight: "700",
            lineHeight: "1",
            color: "#444",
          }}
        >
          One of us?
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            padding: "0.7rem 0",
            color: "#444",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure.
          Error, eos! Atque quam magni vitae veritatis temporibus
        </p>
        <Button
          variant="info"
          size="lg"
          className="col-2 mt-2 btn-style"
          style={{
            color: "white",
            border: "2px solid #fff",
          }}
          onClick={() => {
            dispatch(toggleLogin());
          }}
        >
          Sign In
        </Button>
        <img
          src={panelCover2}
          alt=""
          style={{
            width: "90%",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
      </motion.div>
    </>
  );
};

export default PanelContent;
