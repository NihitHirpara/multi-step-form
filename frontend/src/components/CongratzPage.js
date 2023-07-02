import React, { useContext, useState } from "react";
import { FormContext } from "../context/form-context";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CongratzPage() {
  const { formState, resetFormState } = useContext(FormContext);
  const [fullname, setFullname] = useState(formState.Fullname);
  const [email, setEmail] = useState(formState.Email);
  const [phoneNumber, setPhoneNumber] = useState(formState.Phonenumber);
  const [companyName, setCompanyName] = useState(formState.CompanyName);
  const [position, setPosition] = useState(formState.Position);
  const [department, setDepartment] = useState(formState.Department);
  const [experience, setExperience] = useState(formState.Experience);
  const [status, setStatus] = useState(formState.Status);
  const navigate = useNavigate();


  const handleSave = () => {
    const formData = {
      Fullname: fullname,
      Email: email,
      Phonenumber: phoneNumber,
      CompanyName: companyName,
      Position: position,
      Department: department,
      Experience: experience,
      Status: status,
    };

    axios
      .post("http://localhost:3000/saveFormData", formData)
      .then((response) => {
        console.log(response); // Display success message
        navigate("/table");
        resetFormState();
      })
      .catch((error) => {
        console.error(error); // Display error message
      });
  };
  return (
    <Wrapper>
      <span className="container headings">
        <div className="twoinput">
          <span className="container">
            <p>Full Name</p>
            <input
              className="inputField"
              type="text"
              name="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </span>
          <span className="container">
            <p>Email</p>
            <input
              className="inputField"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        </div>
        <div className="twoinput">
          <span className="container">
            <p>Phone Number</p>
            <input
              className="inputField"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </span>
          <span className="container">
            <p>Company Name</p>
            <input
              className="inputField"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </span>
        </div>
        <div className="twoinput">
          <span className="container">
            <p>Position</p>
            <input
              className="inputField"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </span>
          <span className="container">
            <p>Department</p>
            <input
              className="inputField"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </span>
        </div>
        <div className="twoinput">
          <span className="container">
            <p>Experience</p>
            <input
              className="inputField"
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </span>
          <span className="container">
            <p>Status</p>
            <input
              className="inputField"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </span>
        </div>
        <button onClick={handleSave} className="savebtn">
          Save
        </button>
      </span>
    </Wrapper>
  );
}

export default CongratzPage;

const Wrapper = styled.div`
  .twoinput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
    padding: 3px 10px;
    width: auto;
    overflow-y: auto;
    max-height: 350px;
  }
  .headings {
    align-items: center;
    max-width: max-content;
    width: 100%;
  }
  .savebtn {
    background-color: #6554df;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
`;
