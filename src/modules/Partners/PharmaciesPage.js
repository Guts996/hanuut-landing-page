import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/background.png";
import PharmacyImage from "../../assets/pharmacyIllustration2.svg";
import SubscribePharmacyImage from "../../assets/pharmacyIllustration.svg";
import { useTranslation } from "react-i18next";
import { ActionButton, TextButton } from "../../components/ActionButton";
import PharmacySearch from "./components/PharmacySearch";
import SubscribePharmacy from "./components/SubscribePharmacy";

const Section = styled.div`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImage});
  background-size: 100%;
  gap: 2rem;
  background-position: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
const Container = styled.div`
  padding: 3rem 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
  }
`;
const UpperBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  gap: 0.2rem;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const RightBox = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const PartnersImageContainer = styled.img`
  max-width: 80%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: ${(props) => (props.hide ? "0" : "100%")};
  }
`;
const LowerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 4rem;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const SubHeading = styled.h2`
  width: 100%;
  font-size: ${(props) => props.theme.fontxxxl};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.fontxxxl};
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const PharmaciesPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section>
      <Container>
        <UpperBox>
          <LeftBox>
            <Heading>Pharmacies</Heading>
            <SubHeading>Find Pharmacies in your area</SubHeading>
            <Paragraph>We help you find the working pharmacies</Paragraph>
            <ActionButton>find pharmacy</ActionButton>
            <TextButton>register your pharmacy</TextButton>
          </LeftBox>
          <RightBox>
            {" "}
            <PartnersImageContainer
              src={PharmacyImage}
              isArabic={i18n.language === "ar"}
              alt="Partners"
            />
          </RightBox>
        </UpperBox>
      </Container>
      <LowerBox>
        <PharmacySearch />
        <SubscribePharmacy />
      </LowerBox>
    </Section>
  );
};

export default PharmaciesPage;
