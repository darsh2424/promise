import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLove } from "../context/LoveContext";
import weddingAudio from "../assets/marriage-theme.mp3";
import roundLoader from "../assets/round-loader.gif";
import '../styles/Marriage.css';

const MarriagePage = () => {
  const { setIsMarried } = useLove();
  const navigate = useNavigate();
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ritualComplete, setRitualComplete] = useState(false);
  const [audio] = useState(new Audio(weddingAudio));

  const playAudio = () => {
    audio.loop = true;
    audio.play()
      .then(() => setAudioPlayed(true))
      .catch(() => alert("Enable audio and try again! 🎶"));
  };

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio on unmount
    };
  }, [audio]);

  const startWeddingRitual = () => {
    setLoading(true);
    setTimeout(() => {
      setIsMarried(true);
      setLoading(false);
      setRitualComplete(true);
    }, 1000);
  };

  const finishMarriage = () => {
    navigate("/celebration");
  };

  return (
    <div className="marriage-container">
      {!audioPlayed ? (
        <div className="play-theme">
          <h2>💖 Our Love Journey Begins! 💖</h2>
          <p>Before we start, let's set the mood with our wedding theme.</p>
          <button onClick={playAudio}>Play Wedding Theme 🎶</button>
        </div>
      ) : (
        <>
          <h2>Follow Me, My Love 💑</h2>
          <p>Let's begin our virtual wedding ceremony.</p>

          {!loading && !ritualComplete && (
            <button onClick={startWeddingRitual}>Start Wedding Ritual 🔥</button>
          )}

          {loading && <img src={roundLoader} alt="Wedding Ritual" className="round-loader" />}

          {ritualComplete && (
            <div className="vachans-container fade-in">
              <h3>📜 Hindu Marriage 7 Vachans</h3>
              <p className="funny-text">(Read carefully! There may be questions later... Just kidding 😆)</p>
              <ul className="vachan-list">
                <li>1️⃣ We promise to walk this journey together, forever.</li>
                <li>2️⃣ We will always respect and support each other.</li>
                <li>3️⃣ We promise to fill our lives with laughter and love.</li>
                <li>4️⃣ We will share our joys, sorrows, and ice creams! 🍦</li>
                <li>5️⃣ We will always choose love over anger. 💖</li>
                <li>6️⃣ We promise to be best friends before anything else.</li>
                <li>7️⃣ We will never break these vows (because love is eternal!).</li>
              </ul>

              <button onClick={finishMarriage}>Finish & Proceed 🎉</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MarriagePage;
