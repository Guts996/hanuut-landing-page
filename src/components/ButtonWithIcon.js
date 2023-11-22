import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "@fontsource/roboto";
import '@fontsource-variable/cairo';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.primaryColor};
  color: #fff;
  border: none;
  border-radius: ${(props) => props.theme.defaultRadius};
  padding: ${(props) => props.theme.actionButtonPaddingMobile};
  font-size: ${(props) => props.theme.fontlg};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
    padding: ${(props) => props.theme.smallPadding};
  }
  &.homeDownloadButton {
    padding: ${(props) => props.theme.actionButtonPadding};
    font-size: ${(props) => props.theme.fontxl};
  p{
    font-size: ${(props) => props.theme.fontsm};
  }
  h6{
    font-size: ${(props) => props.theme.fontxl};
  }
  img{
   height: 1.7rem;
  }
  }
`;

const Icon = styled.img`
  height: 1.2rem;
  object-fit: cover;
  -webkit-transform: ${(props) => (props.isArabic ? "scaleX(-1)" : "")};
  transform: ${(props) => (props.isArabic ? "scaleX(-1)" : "")};
  @media (max-width: 768px) {
    width: auto;
  }
`;

const TextContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  text-align: start;
  font-family: ${(props) => (props.isArabic ? "'Cairo Variable', sans-serif" : "Roboto, sans-serif")};
`;

const SubTitle = styled.h6`
  font-size: ${(props) => props.theme.fontsm};

  font-weight: 500;
  font-family: ${(props) => (props.isArabic ? "'Cairo Variable', sans-serif" : "Roboto, sans-serif")};
`;

const ButtonWithIcon = ({
  image,
  onClick,
  backgroundColor,
  text1,
  text2,
  className,
}) => {
  const { i18n } = useTranslation();
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      className={className}
    >
      <Icon src={image} isArabic={i18n.language === "ar"} />{" "}
      <TextContainer>
        <Title isArabic={i18n.language === "ar"}>{text1}</Title>
        <SubTitle isArabic={i18n.language === "ar"}>{text2} </SubTitle>
      </TextContainer>
    </Button>
  );
};

export default ButtonWithIcon;
