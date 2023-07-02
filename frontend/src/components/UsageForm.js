import { useContext } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addFormData } from "../Slices/FormSlice";
import { FormContext } from "../context/form-context";

function UsageForm({ setScreenNumber, setSelectedScreenShowIn }) {
  
  const dispatch = useDispatch();
  const { formState, updateFormState } = useContext(FormContext);


  const fullNameHandler = (e) => {
    const { name, value } = e.target;
    updateFormState({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    dispatch(addFormData(formState))
    updateFormState()
    // Navigate to the next step
    setScreenNumber(4);
    setSelectedScreenShowIn("final");
  };
  // const insertExperianceName = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Experiance: event.target.value,
  //   }));
  //   event.target.value === ""
  //     ? setValidation((prevData) => ({ ...prevData, Experiance: false }))
  //     : setValidation((prevData) => ({ ...prevData, Experiance: true }));
  // };

  // const insertStatusName = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     Status: event.target.value,
  //   }));
  //   event.target.value === ""
  //     ? setValidation((prevData) => ({ ...prevData, Status: false }))
  //     : setValidation((prevData) => ({ ...prevData, Status: true }));
  // };

  return (
    <Wrapper>
      <span className="container headings">
        <h1>Join As a</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </span>
      <form onSubmit={handleSubmit}>
        <div className="twoinput">
          <span className="container">
            <p className="workspace_name">Experience</p>
            <input
              className="inputField"
              type="number"
              name="Experience"
              placeholder="in year"
              onChange={fullNameHandler}
              value={formState.Experience}
            ></input>
          </span>
          <span className="container">
            <p className="workspace_name">Status</p>
            <input
              className="inputField"
              type="text"
              name='Status'
              placeholder="Full Time"
              onChange={fullNameHandler}
              value={formState.Status}
            ></input>
          </span>
        </div>
        <button type="submit" className="button">Next</button>
      </form>
    </Wrapper>
  );
}

export default UsageForm;

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
