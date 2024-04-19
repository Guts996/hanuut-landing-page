import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Button = styled.button`
  width: 100%;
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "cursor")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
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
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
    h6 {
      font-size: ${(props) => props.theme.fontxl};
    }
    img {
      height: 1.7rem;
    }
    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.fontmd};
      padding: ${(props) => props.theme.smallPadding};
    }
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
  font-family: ${(props) =>
    props.isArabic ? "'Cairo Variable', sans-serif" : "Roboto, sans-serif"};
`;

const SubTitle = styled.h6`
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 500;
  font-family: ${(props) =>
    props.isArabic ? "'Cairo Variable', sans-serif" : "Roboto, sans-serif"};
`;

const ButtonWithReactIcon = ({
  icon: IconComponent,
  onClick,
  backgroundColor,
  text1,
  text2,
  className,
  disabled,
}) => {
  const { i18n } = useTranslation();
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      className={className}
      disabled={disabled}
    >
      {IconComponent && <IconComponent />}
      <TextContainer>
        <Title isArabic={i18n.language === "ar"}>{text1}</Title>
        <SubTitle className={className} isArabic={i18n.language === "ar"}>
          {text2}{" "}
        </SubTitle>
      </TextContainer>
    </Button>
  );
};

export default ButtonWithReactIcon;
