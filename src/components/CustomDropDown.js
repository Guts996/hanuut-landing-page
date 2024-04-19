import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const Container = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 99;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: ${({ theme }) => theme.defaultRadius};
  padding: 0.5rem 1rem;
  display: none;

  ${Container}:hover & {
    display: block;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  flex: 1;
  &:hover {
    border-radius: ${({ theme }) => theme.defaultRadius};
  }
`;

const CustomDropDown = ({ data }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleElementClick = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <MenuItem>{t("navServices")}</MenuItem>
      <Menu>
        {data.map((element) => (
          <MenuItem
            key={element.id}
            onClick={() => handleElementClick(element.link)}
          >
            {element.title[i18n.language] || element.title.en}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default CustomDropDown;
