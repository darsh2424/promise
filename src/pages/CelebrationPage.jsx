import React from "react";
import { useNavigate } from "react-router-dom";
import celebrationGif from "../assets/couple-celebration.gif";
import "../styles/Celebration.css";

const CelebrationPage = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    const isClosed = window.close();
    if (!isClosed) {
      navigate("/"); // Redirect if closing fails
    }
  };

  return (
    <div className="celebration-container">
      <h2 className="fade-in">💍 You Are Now Officially Married ❤️</h2>
      <p className="fade-in">A lifetime of love begins from here!</p>
      <img src={celebrationGif} alt="Couple Celebrating" className="celebration-gif fade-in" />
      <button onClick={handleExit} className="exit-button">Exit 🚪</button>
    </div>
  );
};

export default CelebrationPage;
