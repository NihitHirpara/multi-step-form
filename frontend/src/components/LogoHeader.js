import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import LoginScreen from "./LandingFormPage";

function LogoHeader() {
  return (
    <Wrapper>
      <div className="app">
        <div className="logoBar ">
          <img className="logo" src={logo} alt="" />
          <h1 className="fontlogo">Aimbrill</h1>
        </div>
        <div className="textheader">
          <h1>Get an Employee information</h1>
          <p>please fill the form below to receive an details</p>
        </div>
        <LoginScreen />
      </div>
    </Wrapper>
  );
}

export default LogoHeader;

const Wrapper = styled.div`
  .logoBar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin: 20px 0;
  }

  .logo {
    height: 30px;
    width: 30px;
    padding: 5px;
  }

  .fontlogo {
    font-size: x-large;
    margin: 0;
  }
  .textheader {
    text-align: center;
  }
  .textheader p {
    color: #97a2b8;
    margin-top: 10px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;
