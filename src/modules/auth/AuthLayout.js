import React from "react";
import BackgroundImage from "../../assets/background.png";
import BackgroundImage2 from "../../assets/shapeSvg.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  background-color: red;
  padding: 1rem;
  border-radius: ${(props) => props.theme.bigRadius};
  width: 70%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  direction: ${(props) => (props.isArabic ? "rtl" : "ltr")};
  background: ${(props) => props.theme.body};
`;
const RightBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 45% 0;
  }
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  border-radius: ${(props) => props.theme.bigRadius};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    width: 0%;
    height: 0%;
  }
`;

const IllustrationContainer = styled.img`
  position: absolute;
  left: 10;
  top: 100;
  z-index: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;

  opacity: 0.4;
  @media (max-width: 768px) {
    width: ${(props) => (props.hide ? "0" : "100%")};
  }
`;

const TextContainer = styled.div`
  z-index: 10;
  padding: 1rem;
  width: 100%;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;
`;

const Heading = styled.h1`
  max-width: 90%;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const SubHeading = styled.h2`
  max-width: 80%;
  font-size: ${(props) => props.theme.fontxxxl};
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Paragraph = styled.p`
  max-width: 80%;
  font-size: ${(props) => props.theme.fontxxxl};
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const AuthLayout = ({ children }) => {
  const { t, i18n } = useTranslation();
  return (
    <Section>
      <Container isArabic={i18n.language === "ar"}>
        <LeftBox>
          <IllustrationContainer src={BackgroundImage2} alt="Partners" />
          <TextContainer>
            <Heading>{t("homeHeading")}</Heading>
            <SubHeading>{t("homeSubHeading")}</SubHeading>
            <Paragraph>{t("homeParagraph")}</Paragraph>
          </TextContainer>
        </LeftBox>
        <RightBox>{children}</RightBox>
      </Container>
    </Section>
  );
};

export default AuthLayout;
