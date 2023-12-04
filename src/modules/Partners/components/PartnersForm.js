import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import AddressesDropDown from "../../../components/AddressesDropDown";
import { isValidEmail, isValidPhone } from "../../../components/validators";
import Left from "../../../assets/left.svg";
import Right from "../../../assets/rightOrange.svg";
import {
  checkPhoneNumberAvailability,
  getSubscribeRequest,
  postSubscribeRequest,
} from "../../SubscribeRequest/services/SubscribeRequest";
import { light } from "../../../config/Themes";
import MessageWithLink from "../../../components/MessageWithLink";
import DomainsDropDown from "../../../components/DomainsDropDown";
import { TextButton } from "../../../components/ActionButton";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import Send from "../../../assets/send.svg";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PartnerFormStep = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(5%);
  }
  to {
    transform: translateX(0);
  }
`;

const negativeSlideAnimation = keyframes`
  from {
    transform: translateX(-5%);
  }
  to {
    transform: translateX(0);
  }
`;
const PopUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.4);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;
const Step = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-name: ${(props) =>
    props.isArabic ? negativeSlideAnimation : slideAnimation};
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontLargest};
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryColor};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const SubHeading = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.fontxxxl};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  &.greenSubHeading {
    color: ${(props) => props.theme.primaryColor};
  }
`;

const FirstStep = styled(Step)`
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const SecondStep = styled(Step)`
  align-items: flex-end;
  justify-content: flex-start;
`;

const ThirdStep = styled(Step)`
  align-items: flex-end;
  justify-content: flex-start;
`;

const FourthStep = styled(Step)`
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 1em;
  text-align: center;
  animation-name: ${PopUpAnimation};
  animation-duration: 0.75s;
`;
const Icon = styled.img`
  height: 2rem;
  width: 2rem;
`;

const Paragraph = styled.p`
  text-align: center;
  width: 100%;
  font-size: ${(props) => props.theme.fontxl};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
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

const Label = styled.label`
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const PhoneInputWrapper = styled(InputWrapper)`
  margin: 0.5rem 0;
  width: 100%;
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

const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  border: none;
  border-radius: ${(props) => props.theme.defaultRadius};
  padding: ${(props) => props.theme.actionButtonPadding};
  font-size: ${(props) => props.theme.fontxl};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
    padding: ${(props) => props.theme.actionButtonPaddingMobile};
  }
`;
const EmailButton = styled(Button)`
  margin: 0.5rem;
`;
const SmallParagraph = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.fontmd};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Option = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.defaultRadius};
  font-size: ${(props) => props.theme.fontmd};
  cursor: pointer;
  transition: all 0.5s ease;
  padding: ${(props) => props.theme.smallPadding};
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
  }

  &.selected {
    color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.primaryColor};
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  p {
    width: fit-content;
    background-color: #ffbaba;
    color: #d8000c;
    padding: ${(props) => props.theme.smallPadding};
    border: 1px solid #d8000c;
    border-radius: ${(props) => props.theme.defaultRadius};
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const PartnersForm = ({ setStep }) => {
  const myHanuutDownloadLink = process.env.REACT_APP_MY_HANUUT_DOWNLOAD_LINK;

  const { t, i18n } = useTranslation();
  const [formStep, setFormStep] = useState(0);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [domain, setDomain] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [channel, setChannel] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);

  const resetForm = () => {
    setEmail("");
    setFullName("");
    setPhone("");
    setAddress("");
    setDomain("");
    setBusinessName("");
    setChannel("");
    setIsSubmitting(false);
    setSelectedOption(null);
    setErrorMessage("");
    setSuccessMessage("");
    setIsAccepted(false);
  };

  const options = [
    {
      id: 0,
      label: "Social Media Posts",
      labelAr: "منشورات مواقع التواصل الاجتماعي",
      value: "social media",
    },
    {
      id: 1,
      label: "referral customer",
      labelAr: "إقتراح أحد الزبائن",
      value: "referral customer",
    },
    {
      id: 2,
      label: "referral shop owner",
      labelAr: "إقتراح أحد المحلات",
      value: "referral shop owner",
    },
  ];

  const handleLeftClick = () => {
    resetForm();
    setFormStep(0);
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();

    if (!phone) {
      setErrorMessage(t("errorFillAllFields"));
      return;
    }
    if (!isValidPhone(phone)) {
      setErrorMessage(t("errorPhoneNotValid"));
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");

    const isPhoneUsed = await checkPhoneNumberAvailability(phone);
    if (isPhoneUsed === true) {
      const subscribeRequest = await getSubscribeRequest(phone);
      if (subscribeRequest.isAccepted === true) {
        setSuccessMessage(t("clickToDownloadApp"));
        setIsAccepted(true);
      } else {
        setSuccessMessage(t("messagePhoneIsUsed"));
      }
      setErrorMessage("");
      setFormStep(3);
      setStep(3);
      setIsSubmitting(false);
      return;
    } else {
      setFormStep(1);
      setStep(1);
      setIsSubmitting(false);
    }
  };

  const handleChooseAddress = (newAddress) => {
    setAddress(newAddress);
  };

  const handleChooseDomain = (newDomain) => {
    setDomain(newDomain);
  };

  const handleOptionClick = (event) => {
    event.preventDefault();
    const optionId = parseInt(event.target.value);
    setSelectedOption(optionId);
    setChannel(options[optionId].value);
  };

  const handleNext = (event) => {
    event.preventDefault();

    if (!fullName || !email || !address) {
      setErrorMessage(t("errorFillAllFields"));
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage(t("errorEmailNotValid"));
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    setFormStep(2);
    setStep(2);
    setIsSubmitting(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ domain: domain });
    if (
      !fullName ||
      !phone ||
      !address ||
      !email ||
      !address.wilaya ||
      !address.commune ||
      !channel ||
      !domain ||
      !businessName
    ) {
      setErrorMessage(t("errorFillAllFields"));

      return;
    }

    if (!isValidPhone(phone)) {
      setErrorMessage(t("errorPhoneNotValid"));

      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage(t("errorEmailNotValid"));

      return;
    }

    setIsSubmitting(true);

    const isPhoneUsed = await checkPhoneNumberAvailability(phone);

    if (isPhoneUsed === true) {
      const subscribeRequest = await getSubscribeRequest(phone);
      if (subscribeRequest.isAccepted === true) {
        setSuccessMessage(t("clickToDownloadApp"));
        setIsAccepted(true);
      } else {
        setSuccessMessage(t("messagePhoneIsUsed"));
      }
      setErrorMessage("");
      setFormStep(3);
      setStep(3);
      setIsSubmitting(false);
      return;
    } else {
      const data = {
        fullName: fullName,
        phone: phone,
        email: email,
        wilaya: address.wilaya,
        commune: address.commune,
        type: "partner",
        channel: channel,
        domain: domain,
        businessName: businessName,
      };

      const response = postSubscribeRequest(data);
      if (!response) {
        setErrorMessage(t("errorCouldNotSubscribe"));
        setFormStep(0);
        setStep(0);
      } else {
        setFormStep(3);
        setStep(3);
      }
      setIsSubmitting(false);
    }
  };
  return (
    <Container>
      <PartnerFormStep>
        {formStep === 0 && (
          <FirstStep isArabic={i18n.language === "ar"}>
            <Heading>{t("joinOurCommunity")}</Heading>
            <SubHeading>{t("partnersFormFirstStepSubHeading")}</SubHeading>
            <Paragraph>{t("partnersFormFirstStepParagrapho")}</Paragraph>
            <PhoneInputWrapper>
              <PhoneInput
                type="phone"
                placeholder={t("partnerInputTextPhone")}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <EmailButton
                onClick={handleSubscribe}
                className={isSubmitting ? "submitting" : ""}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("buttonIsSubmitting")
                  : t("partnerInputButton")}
              </EmailButton>
            </PhoneInputWrapper>
            <ErrorMessage>{errorMessage && <p>{errorMessage}</p>}</ErrorMessage>
          </FirstStep>
        )}
        {formStep === 1 && (
          <SecondStep isArabic={i18n.language === "ar"}>
            <Heading className="greenSubHeading">
              {t("secondStepTitle")}{" "}
            </Heading>
            <InputWrapper>
              <Label htmlFor="fullname">{t("partnersFormFullName")}</Label>
              <Input
                type="text"
                placeholder={t("partnerInputTextFullName")}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="phone">{t("partnersFormEmail")}</Label>
              <Input
                type="email"
                placeholder={t("partnerInputText")}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </InputWrapper>
            <SmallParagraph>{t("partnerSmallerParagraph")}</SmallParagraph>
            <AddressesDropDown
              target="partners"
              onChooseAddress={handleChooseAddress}
            />
            <ErrorMessage>{errorMessage && <p>{errorMessage}</p>}</ErrorMessage>
            <TextButton
              onClick={handleNext}
              className={isSubmitting ? "submitting" : ""}
              disabled={isSubmitting}
            >
              {" "}
              {isSubmitting
                ? t("buttonIsSubmitting")
                : t("partnersFormNextButton")}
            </TextButton>
          </SecondStep>
        )}
        {formStep === 2 && (
          <ThirdStep isArabic={i18n.language === "ar"}>
            <Heading className="greenSubHeading">
              {" "}
              {t("thirdStepTitle")}
            </Heading>
            <InputWrapper>
              <Label htmlFor="businessName">
                {t("partnersFormBusinessName")}
              </Label>
              <Input
                type="text"
                placeholder={t("partnerInputTextBusinessName")}
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <DomainsDropDown onChooseDomain={handleChooseDomain} />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="channel">{t("partnersFormSource")}</Label>
              <OptionsWrapper>
                {options.map((option) => (
                  <Option
                    key={option.id}
                    type="text"
                    value={option.id}
                    onClick={handleOptionClick}
                    className={selectedOption === option.id ? "selected" : ""}
                  >
                    {i18n.language === "ar" ? option.labelAr : option.label}
                  </Option>
                ))}
              </OptionsWrapper>
            </InputWrapper>
            {errorMessage ? (
              <ErrorMessage>
                {errorMessage && <p>{errorMessage}</p>}
              </ErrorMessage>
            ) : (
              ""
            )}
            <ButtonWithIcon
              image={Send}
              text2={
                isSubmitting
                  ? t("buttonIsSubmitting")
                  : t("partnersFormSubmitButton")
              }
              className="homeDownloadButton"
              disabled={isSubmitting}
              onClick={(e) => handleSubmit(e)}
            ></ButtonWithIcon>
          </ThirdStep>
        )}
        {formStep === 3 && (
          <FourthStep isArabic={i18n.language === "ar"}>
            {successMessage ? (
              <>
                {successMessage && (
                  <MessageWithLink
                    message={successMessage}
                    link={isAccepted ? myHanuutDownloadLink : ""}
                    linkText={isAccepted ? t("downloadMyHanuut") : ""}
                    textColor={light.primaryColor}
                  />
                )}
              </>
            ) : (
              <>
                <Heading className="greenSubHeading">
                  {t("partnersFormThankYouTitle")}
                </Heading>
                <SubHeading>{t("partnersFormThankYouSubTitle")}</SubHeading>
                <Icon src={Left} onClick={() => handleLeftClick()} />
              </>
            )}
            <Icon
              src={i18n.language === "ar" ? Right : Left}
              onClick={() => handleLeftClick()}
            />
          </FourthStep>
        )}
      </PartnerFormStep>
    </Container>
  );
};

export default PartnersForm;
