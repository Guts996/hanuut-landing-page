import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../modules/HomePage";
import ContactPage from "../modules/ContactPage";
import SolutionsPage from "../modules/SolutionsPage";
import NotFoundPage from "../modules/NotFoundPage";
import PrivacyPolicy from "../modules/PrivacyPolicy";
import TermsAndConditions from "../modules/TermsAndConditions";
import PartnersPage from "../modules/Partners/PartnersPage";
import DeleteAccountPage from "../modules/DeleteAccountPage";
import ShopPageWithUsername from "../modules/Partners/components/ShopPageWithUsername";
// import ShopPage from "../modules/Partners/components/ShopPage";
import Tawsila2 from "../modules/Tawsila/Tawsila2";
// import PaymentPage from "../modules/payment/PaymentPage";
// import SatimTestPage from "../modules/payment/SatimTestPage";
import GetStarted from "../modules/Tawsila/GetStarted";
import GetStartedv2 from "../modules/Tawsila/getStartedv2";

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/delete_account" element={<DeleteAccountPage />} />
      <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
      <Route path="/shop/:username" element={<ShopPageWithUsername />} />
      <Route path="/tawsila" element={<Tawsila2 />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/shop/:shopName" element={<ShopPage/>} /> */}
      {/* <Route path="/confirmPayment" element={<PaymentPage />} /> */}
      {/* <Route path="/testPayment" element={<SatimTestPage />} /> */}
      {/* <Route path="/get-started-with-Tawsila" element={<GetStartedv2 />} /> */}
    </Routes>
  );
};

export default CustomRouter;
