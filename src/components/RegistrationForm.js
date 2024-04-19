import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "./InputComponent";
import { IoIosSend } from "react-icons/io";
import ButtonWithReactIcon from "./ButtonWithReactIcon";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({});
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <FormContainer>
      <InputComponent
        id={"fullname"}
        label={"Full name"}
        type={"text"}
        value={formData.fullname}
        onChange={onChange}
        error={""}
        errorMessage={""}
        required
      />
      <InputComponent
        id={"lastname"}
        label={"Last name"}
        type={"text"}
        value={formData.lastname}
        onChange={onChange}
        error={""}
        errorMessage={""}
        required
      />
      <InputComponent
        id={"email"}
        label={"Email"}
        type={"email"}
        value={formData.email}
        onChange={onChange}
        error={""}
        errorMessage={""}
        required
      />
      <InputComponent
        id={"phone"}
        label={"Phone"}
        type={"tel"}
        value={formData.phone}
        onChange={onChange}
        error={""}
        errorMessage={""}
        required
      />
      <InputComponent
        id={"password"}
        label={"Password"}
        type={"password"}
        value={formData.password}
        onChange={onChange}
        error={""}
        errorMessage={""}
        require
      />
      <ButtonWithReactIcon
        icon={IoIosSend}
        text2={"Create an account"}
        onClick={handleRegister}
      />
    </FormContainer>
  );
};

export default RegistrationForm;
