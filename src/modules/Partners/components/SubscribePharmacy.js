import React, { useState } from "react";
import styled from "styled-components";
import NewPharmacyImage from "../../../assets/pharmacyIllustration.svg";
import { ActionButton } from "../../../components/ActionButton";
import RegistrationForm from "../../../components/RegistrationForm";

const Section = styled.div`
  min-height: 50vh;
  padding: 3rem 0;
  display: flex;
  align-items: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 80%;
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const IllustrationContainer = styled.img`
  max-width: 80%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: ${(props) => (props.hide ? "0" : "100%")};
  }
`;

const RightBox = styled.div`
  padding-top: 5rem;
  width: 50%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const UpperBox = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LowerBox = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  max-height: ${({ isExpanded }) =>
    isExpanded ? "100vh" : "0vh"}; /* Changed to max-height */
  overflow: hidden;
  transition: max-height 0.5s ease; /* Changed property to max-height */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  max-heigh: 75%;
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
  max-width: 60%;
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontxxxl};
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubscribePharmacy = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Section>
      <LeftBox>
        <IllustrationContainer src={NewPharmacyImage} alt="Partners" />
      </LeftBox>
      <RightBox>
        <UpperBox>
          <Heading>Register your pharmacy for free</Heading>
          <Paragraph>
            and help people in need cuz they can find you easily and fast
          </Paragraph>
          {!isExpanded ? (
            <ActionButton onClick={handleButtonClick}>Register</ActionButton>
          ) : (
            ""
          )}
        </UpperBox>
        <LowerBox isExpanded={isExpanded}>
          {isExpanded && <RegistrationForm />}
        </LowerBox>
      </RightBox>
    </Section>
  );
};

export default SubscribePharmacy;
