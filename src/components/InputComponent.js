import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Label = styled.label`
  position: absolute;
  bottom: 25px;
  left: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.body};
  color: ${(props) =>
    props.isFocused ? props.theme.primaryColor : props.theme.text};
  padding: 0.5rem;
  padding-left: 0;
  padding-top: 0;
  transition: background-color 0.3s ease;

  &:focus-within {
    background-color: green;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${(props) => props.theme.body};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.body} inset !important;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.text} !important;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 0.5rem;
`;

const InputComponent = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  errorMessage,
  required,
  isLabelActive,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputWrapper>
      <Label isFocused={isFocused}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        active={isLabelActive}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};

export default InputComponent;
