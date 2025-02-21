import React from "react";
import { Routes, Route } from "react-router-dom";
import QandAPage from "./pages/QandAPage";
import AgreementPage from "./pages/AgreementPage";
import MarriagePage from "./pages/MarriagePage";
import CelebrationPage from "./pages/CelebrationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<QandAPage />} />
      <Route path="/agreement" element={<AgreementPage />} />
      <Route path="/marriage" element={<MarriagePage />} />
      <Route path="/celebration" element={<CelebrationPage />} />
    </Routes>
  );
};

export default App;
