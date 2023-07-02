import React, { useContext } from "react";
import { styled } from "styled-components";
import { FormContext } from "../context/form-context";

function WorkspaceForm({ setScreenNumber, setSelectedScreenShowIn }) {

  const { formState, updateFormState } = useContext(FormContext);

  const fullNameHandler = (e) => {
    const { name, value } = e.target;
    updateFormState({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addFormData(formState))
    // Perform form submission logic

    // Navigate to the next step
    setScreenNumber(3);
    setSelectedScreenShowIn('usescreen');
  };

  // const insertDepartmentName = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Department: event.target.value,
  //   }));
  //   event.target.value === ""
  //     ? setValidation((prevData) => ({ ...prevData, Department: false }))
  //     : setValidation((prevData) => ({ ...prevData, Department: true }));
  // };

  // const insertPositionName = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Position: event.target.value,
  //   }));
  //   event.target.value === ""
  //     ? setValidation((prevData) => ({ ...prevData, Position: false }))
  //     : setValidation((prevData) => ({ ...prevData, Position: true }));
  // };

  return (
    <Wrapper>
      <div>
        <span className="container headings">
          <h1>Please set up your position</h1>
          <p>You can always create another workspace later.</p>
        </span>
       <form onSubmit={handleSubmit}>
        <div className="twoinput">
          <span className="container">
            <p className="workspace_name">Department Name</p>
            <input
              className="inputField"
              type="text"
              name='Department'
              placeholder="Design"
              onChange={fullNameHandler}
              value={formState.Department}
            ></input>
          </span>
          <span className="container">
            <p className="workspace_name">Position</p>
            <input
              className="inputField"
              type="text"
              name='Position'
              placeholder="React js"
              onChange={fullNameHandler}
              value={formState.Position}
            ></input>
          </span>
        </div>
        <button type="submit" className="button">Next</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default WorkspaceForm;

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
    padding: 10px;
    width: auto;
  }
  .twoinput {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .workspace_name {
    text-align: start !important;
  }
  .container_row {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    margin: 10px;
    padding: 0px;
    gap: 3.5vw;
  }

  .headings {
    align-items: flex-start;
    max-width: max-content;
    width: 100%;
  }

  .headings p {
    color: rgba(0, 0, 0, 0.6);
  }

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 25rem;
    max-width: 95vw;
  }

  .subtext {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    margin-left: 10px;
  }

  .staticInput {
    height: 1rem;
    max-width: 6.5rem;
    width: 30%;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.4);
    background-color: aliceblue;
    padding: 0.75rem;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
    border-radius: 6px 0px 0px 6px;
    text-align: start;
  }

  @media screen and (max-width: 350px) {
    .staticInput {
      font-size: 0.5rem;
    }
  }
`;
