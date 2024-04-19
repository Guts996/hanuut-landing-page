import React, { useState } from "react";
import styled from "styled-components";
import { ActionButton } from "../../../components/ActionButton";

const Section = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.body};
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontLargest};
  color: ${(props) => props.theme.primaryColor};
  font-weight: 900;
  text-transform: uppercase;
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Paragraph = styled.p`
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontxxxl};
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const InputWrapper = styled.div`
  width: 30%;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Input = styled.input`
  border-radius: ${(props) => props.theme.smallRadius};
  padding: ${(props) => props.theme.smallPadding};
  border: 1px solid rgba(${(props) => props.theme.primaryColorRgba}, 0.5);
  font-size: ${(props) => props.theme.fontxl};
  background-color: transparent;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primaryColor};
  }
`;
const PhoneInputWrapper = styled(InputWrapper)`
  margin: 0.5rem 0;
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.defaultRadius};
  border: 1px solid ${(props) => props.theme.primaryColor};
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const PhoneInput = styled(Input)`
  flex: 1;
  border: none;
  font-size: ${(props) => props.theme.fontxl};
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const PharmacySearch = () => {
  const [city, setCity] = useState("");
  const handleSearch = () => {};
  return (
    <Section>
      <Heading>Find pharmacies in your area</Heading>
      <Paragraph>and find saydaliya mounawiba</Paragraph>
      <PhoneInputWrapper>
        <PhoneInput
          type="text"
          placeholder="enter city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        <ActionButton
          onClick={handleSearch}
          //   className={isSubmitting ? "submitting" : ""}
          //   disabled={isSubmitting}
        >
          search
        </ActionButton>
      </PhoneInputWrapper>
    </Section>
  );
};

export default PharmacySearch;
