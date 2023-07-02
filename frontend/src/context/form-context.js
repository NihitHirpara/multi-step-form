import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    Fullname: "",
    Email: "",
    Phonenumber: "",
    CompanyName: "",
    Position: "",
    Department: "",
    Experience: "",
    Status: "",
  });

  const updateFormState = (newData) => {
    setFormState((prevFormData) => ({
      ...prevFormData,
      ...newData,
    }));
  };

  const resetFormState = () => {
    setFormState({
      Fullname: "",
      Email: "",
      Phonenumber: "",
      CompanyName: "",
      Position: "",
      Department: "",
      Experience: "",
      Status: "",
    });
  };

  return (
    <FormContext.Provider
      value={{ formState, updateFormState, resetFormState }}
    >
      {children}
    </FormContext.Provider>
  );
};
