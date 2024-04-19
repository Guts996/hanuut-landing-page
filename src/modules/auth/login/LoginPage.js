import React from "react";
import AuthLayout from "../AuthLayout";
import styled from "styled-components";
// import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  text-align: center;
  max-width: 100%;
  font-size: ${(props) => props.theme.fontLargest};
  color: ${(props) => props.theme.primaryColor};
  font-weight: 900;
  text-transform: uppercase;
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

// const SubHeading = styled.h2`
//   text-align: center;
//   max-width: 80%;
//   font-size: ${(props) => props.theme.fontxxl};
//   margin-bottom: 1rem;
//   @media (max-width: 768px) {
//     width: 90%;
//     font-size: ${(props) => props.theme.fontxl};
//   }
// `;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  max-width: 100%;
  font-size: ${(props) => props.theme.fontxxl};
  @media (max-width: 768px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const LoginPage = () => {
  // const { t } = useTranslation();

  return (
    <AuthLayout>
      <LoginContainer>
        <TextContainer>
          <Heading>Welcome Back</Heading>
          {/* <SubHeading>{t("homeSubHeading")}</SubHeading> */}
          <Paragraph>Enter your phone number to login</Paragraph>
        </TextContainer>
        <LoginForm />
      </LoginContainer>
    </AuthLayout>
  );
};

export default LoginPage;
