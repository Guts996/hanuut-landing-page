import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ShopCart, VerticalShopCart } from "./ShopCart";
import { useParams } from "react-router-dom";
import BackgroundImage from "../../../assets/background.png";
import CategoriesContainer from "../../Categories/components/CategoriesContainer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Playstore from "../../../assets/playstore.png";
import {
  fetchShopWithUsername,
  selectShop,
  selectShops,
} from "../state/reducers";
import {
  fetchShopImage,
  selectSelectedShopImage,
} from "../../Images/state/reducers";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import NotFoundPage from "../../NotFoundPage";
import ButtonWithIcon from "../../../components/ButtonWithIcon";

const Section = styled.div`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${BackgroundImage});
  background-size: 100%;
  background-position: center;
  padding: 2rem 0;
  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const FoodContainer = styled.div`
  width: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
    90deg,
    hsla(147, 45%, 80%, 1) 0%,
    hsla(148, 46%, 92%, 1) 48%,
    hsla(0, 0%, 100%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(147, 45%, 80%, 1) 0%,
    hsla(148, 46%, 92%, 1) 48%,
    hsla(0, 0%, 100%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(147, 45%, 80%, 1) 0%,
    hsla(148, 46%, 92%, 1) 48%,
    hsla(0, 0%, 100%, 1) 100%
  );
  border-radius: ${(props) => props.theme.defaultRadius};
  box-shadow: 0 5px 5px rgba(${(props) => props.theme.primaryColorRgba}, 0.2);
  direction: ${(props) => (props.isArabic ? "rtl" : "ltr")};
  @media (max-width: 768px) {
    padding: ${(props) => props.theme.smallPadding};
    width: 85%;
  }
`;

const UpperBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const OrderAndDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.25rem;
    margin-top: 1rem;
    align-items: flex-start;
  }
`;

const VerticalOrderAndDownload = styled(OrderAndDownload)`
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;
const Title = styled.p`
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const MenuTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.orangeColor};
  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const LowerBox = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GroceriesContainer = styled(FoodContainer)`
  flex-direction: row;
  gap: 1rem;
`;

const LeftBox = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 70vh;
  @media (max-width: 768px) {
  }
`;

const RightBox = styled(LeftBox)`
  max-width: 75%;
  border: none;
`;

const ShopCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 768px) {
  }
`;

const ShopPageWithUsername = () => {
  const link = "https://play.google.com/store/apps/details?id=com.hanuut.shop";
  const { t, i18n } = useTranslation();
  const { username } = useParams();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectShops);
  const selectedShop = useSelector(selectShop);
  const selectedShopImage = useSelector(selectSelectedShopImage);
  const [domainKeyWord, setDomainKeyWord] = useState(null);

  useEffect(() => {
    console.log("shop with username");
    dispatch(fetchShopWithUsername(username));
    console.log(selectedShop);
  }, [dispatch, username]);

  useEffect(() => {
    if (selectedShop.domainId) {
      console.log("fetching domain ...");
      console.log(domainKeyWord);
      setDomainKeyWord(selectedShop.domainId.keyword);
    }
  }, [dispatch, selectedShop]);

  useEffect(() => {
    if (selectedShop && selectedShop.imageId) {
      dispatch(fetchShopImage(selectedShop.imageId));
    }
  }, [dispatch, selectedShop]);

  if (error) {
    return <NotFoundPage />;
  }
  if (!selectedShop || !selectedShopImage || loading || !domainKeyWord) {
    return (
      <Section>
        <Loader />
      </Section>
    );
  }

  return (
    <Section>
      {domainKeyWord === "food" ? (
        <FoodContainer isArabic={i18n.language === "ar"}>
          <UpperBox>
            {selectedShop && selectedShopImage ? (
              <ShopCart
                className="headingShopCart"
                key={selectedShop.id}
                shop={selectedShop}
                imageData={selectedShopImage}
              />
            ) : (
              <Loader />
            )}
            <OrderAndDownload>
              <Title>{t("toOrder")}</Title>
              <Link to={link}>
                <ButtonWithIcon
                  image={Playstore}
                  backgroundColor="#000000"
                  text1={t("getItOn")}
                  text2={t("googlePlay")}
                ></ButtonWithIcon>
              </Link>
            </OrderAndDownload>
          </UpperBox>
          <MenuTitle>{t("menuTitle")}</MenuTitle>
          <LowerBox>
            {selectedShop ? (
              <CategoriesContainer shopData={selectedShop} />
            ) : (
              <Loader />
            )}
          </LowerBox>
        </FoodContainer>
      ) : (
        <GroceriesContainer isArabic={i18n.language === "ar"}>
          <LeftBox>
            {" "}
            {selectedShop && selectedShopImage ? (
              <VerticalShopCart
                key={selectedShop.id}
                shop={selectedShop}
                imageData={selectedShopImage}
              />
            ) : (
              <Loader />
            )}
            <p>Classes</p>
            <p>Families</p>
            <p>Categories</p>
            <VerticalOrderAndDownload>
              <Title>{t("toOrder")}</Title>
              <Link to={link}>
                <ButtonWithIcon
                  image={Playstore}
                  backgroundColor="#000000"
                  text1={t("getItOn")}
                  text2={t("googlePlay")}
                ></ButtonWithIcon>
              </Link>
            </VerticalOrderAndDownload>
          </LeftBox>
          <RightBox></RightBox>
        </GroceriesContainer>
      )}
    </Section>
  );
};

export default ShopPageWithUsername;
