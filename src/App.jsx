import React from "react";
import { Routes, Route } from "react-router-dom";
import QandAPage from "./pages/QandAPage";
import AgreementPage from "./pages/AgreementPage";
import MarriagePage from "./pages/MarriagePage";
import CelebrationPage from "./pages/CelebrationPage";
import YouTubePlayerPage from "./pages/YouTubePlayerPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<QandAPage />} />
      <Route path="/agreement" element={<AgreementPage />} />
      <Route path="/marriage" element={<MarriagePage />} />
      <Route path="/celebration" element={<CelebrationPage />} />
      <Route path="/player" element={<YouTubePlayerPage />} />
    </Routes>
  );
};

export default App;
