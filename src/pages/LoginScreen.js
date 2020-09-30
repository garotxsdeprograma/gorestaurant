import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginScreen = (props) => {
  return (
    <>
      <Header></Header>
      <Login history={props.history}></Login>
    </>
  );
};

export default LoginScreen;
