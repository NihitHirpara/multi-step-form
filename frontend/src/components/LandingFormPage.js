import React, { useState } from "react";
import UserNameForm from "./UserNameForm";
import WorkspaceForm from "./WorkspaceForm";
import UsageForm from "./UsageForm";
import CongratzPage from "./CongratzPage";
import { styled } from "styled-components";
import { Steps } from "antd";

const LoginScreen = () => {
  const { Step } = Steps;
  const [screenNumber, setScreenNumber] = useState(1);
  const [selectedScreenShowIn, setSelectedScreenShowIn] = useState("default");

  
  const allScreens = [
    {
      label: "Step 1",
      component: (
        <UserNameForm
          setScreenNumber={setScreenNumber}
          setSelectedScreenShowIn={setSelectedScreenShowIn}
        />
      ),
      showIn: ["default"],
    },
    {
      label: "Step 2",
      component: (
        <WorkspaceForm
          setScreenNumber={setScreenNumber}
          setSelectedScreenShowIn={setSelectedScreenShowIn}
        />
      ),
      showIn: ["signup"],
    },
    {
      label: "Step 3",
      component: (
        <UsageForm
          setScreenNumber={setScreenNumber}
          setSelectedScreenShowIn={setSelectedScreenShowIn}
        />
      ),
      showIn: ["usescreen"],
    },
    {
      label: "Step 4",
      component: (
        <CongratzPage
          setScreenNumber={setScreenNumber}
          setSelectedScreenShowIn={setSelectedScreenShowIn}
        />
      ),
      showIn: ["final"],
    },
  ];

  const steps = allScreens.filter(
    (step) =>
      step.showIn.includes(selectedScreenShowIn) ||
      step.showIn.includes("default") ||
      step.showIn.includes("signup") ||
      step.showIn.includes("usescreen")
  );
  const { component } = steps?.[screenNumber - 1] || {};

  return (
    <Wrapper>
      <div>
        <Steps current={screenNumber - 1}>
          {steps.map((step, index) => (
            <Step key={index} title={`Step ${index + 1}`} />
          ))}
        </Steps>
        <div className="formdiv">
          <div className="card">{component}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginScreen;

const Wrapper = styled.div`
  .form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    flex-direction: column;
    width: auto;
  }

  h1 {
    margin: 5px 0px;
    font-size: 1.8em;
  }

  p {
    margin: 5px 0px;
    font-size: small;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
