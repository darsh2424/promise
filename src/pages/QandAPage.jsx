import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLove } from "../context/LoveContext";
import QuestionForm from "../components/QuestionForm";
import MediaGrid from "../components/MediaGrid";
import teddyLoveGif from "../assets/teddy-love.gif";
import teddyCryGif from "../assets/teddy-cry.gif";
import teddyHitGif from "../assets/teddy-hit.gif"; // Looping Hit GIF
import chocoImg from "../assets/chocolate.jpg";
import teddyGiftImg from "../assets/gifts.jpg";
import iceCreamImg from "../assets/ice-cream.jpg";
import pamperImg from "../assets/pamper.gif";
import song1 from "../assets/song1.mp3";
import song2 from "../assets/song2.mp3";
import song3 from "../assets/song3.mp3";
import song4 from "../assets/song4.mp3";
import songPoster1 from "../assets/song1.jpeg";
import songPoster2 from "../assets/song2.jpg";
import songPoster3 from "../assets/song3.jpg";
import songPoster4 from "../assets/song4.jpg";
import "../styles/LoveTheme.css"; // 🎀 Importing the CSS

const QandAPage = () => {
  const { setIsLoved } = useLove();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [teddyGif, setTeddyGif] = useState(null);
  const [step, setStep] = useState(0);

  const gifts = [
    { type: "image", src: chocoImg, alt: "Chocolate" },
    { type: "image", src: teddyGiftImg, alt: "Teddy Gift" },
    { type: "image", src: iceCreamImg, alt: "Ice Cream" },
    { type: "image", src: pamperImg, alt: "Pampering Image" },
  ];

  const songs = [
    { type: "audio", poster: songPoster1, audio: song1, alt: "Romantic Song 1" },
    { type: "audio", poster: songPoster2, audio: song2, alt: "Romantic Song 2" },
    { type: "audio", poster: songPoster3, audio: song3, alt: "Romantic Song 3" },
    { type: "audio", poster: songPoster4, audio: song4, alt: "Romantic Song 4" },
  ];

  const startLoading = (isLove) => {
    setLoading(true);
    setTeddyGif(isLove ? teddyLoveGif : teddyCryGif);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (isLove) {
              setIsLoved(true);
              navigate("/agreement");
            } else {
              setStep((prevStep) => prevStep + 1);
              setLoading(false);
            }
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="qa-container">
      {/* Replace Content Dynamically */}
      {loading ? (
        <div className="loading-container">
          <img src={teddyGif} alt="teddy gif" className="teddy-gif" />
          <div className="loading-bar">
            <div className="loading-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : step === 0 ? (
        <QuestionForm
          question="Are You In Love With Me?"
          onYes={() => startLoading(true)}
          onNo={() => startLoading(false)}
        />
      ) : step === 1 ? (
        <MediaGrid
          media={gifts}
          question="I will give you Chocolate, Teddy Bear, Ice Cream, Pampering!"
          onYes={() => startLoading(true)}
          onNo={() => setStep(2)}
        />
      ) : step === 2 ? (
        <MediaGrid
          media={songs}
          question="I'm dedicating my love via these songs!"
          yesText="Aww I Like It"
          noText="I Don't Like"
          onYes={() => startLoading(true)}
          onNo={() => setStep(3)}
        />
      ) : (
        // Step 3 - Teddy Hit GIF + Looping Question
        <div className="step3-container">
          <div className="gif-container">
            <img src={teddyHitGif} alt="Angry Teddy" className="teddy-hit-gif" />
          </div>
          <div className="question-container">
            <QuestionForm
              question="Are you sure you still don't love me?"
              onYes={() => setStep(3)}
              onNo={() => startLoading(true)} // Loop until Yes is clicked
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QandAPage;
