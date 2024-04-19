import React from "react";
import AuthLayout from "../AuthLayout";
import RegistrationForm from "../../../components/RegistrationForm";
import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;
const Paragraphe = styled.p`
  margin-bottom: 1rem;
`;
const CustomLink = styled.a`
  color: ${(props) => props.theme.primaryColor};
`;
const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterContainer>
        <Title>Join our community</Title>
        <Paragraphe>
          Fill the form to create a new account and explore useful features
        </Paragraphe>
        <RegistrationForm />
        <Paragraphe>
          Already have an account?{" "}
          <CustomLink href="/login">click here to login</CustomLink>
        </Paragraphe>
      </RegisterContainer>
    </AuthLayout>
  );
};

export default RegisterPage;
