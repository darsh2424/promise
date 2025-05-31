import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/VideoTheme.css";

const mediaMap = {
  "happy-birthday-princess": {
    src: "https://www.youtube.com/embed/LTsR3LfhdxI",
    text: "🎂 Happy Birthday, Princess! 🎉",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTd6dHl0c2o1ZWc0dWVyZnphdGZ5bGQyc2N1MjlvZ2o1M2R0cHJmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r95kAgBEzeapljl1ft/giphy.gif"
  },
  "celebration-time": {
    src: "https://www.youtube.com/embed/TQqBjSAK52s",
    text: "Let's Celebrate Together! 🥳",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjFzN2g0YzZjY3F5dW5nZXQ2bDdkc2pkeXRwdGgybzZ2M3VjZ2czMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Im6d35ebkCIiGzonjI/giphy.gif"
  },
  "fun-moments": {
    src: "https://www.youtube.com/embed/hjtX1pgb2Ks",
    text: "Enjoy the Fun Moments! 😄",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXB1cTd2NWZ4ZnNybGU5N3F5NjR0cWtvd2Jia3FwZnRpN3c1czZsOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YHLUpbNcAFpsH7jEqO/giphy.gif"
  },
  "dance-party": {
    src: "https://www.youtube.com/embed/eM8Mjuq4MwQ",
    text: "Get Ready to Dance! 💃🕺",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2M2am1ocndramxodXB1cGNibmYwOHI4eXRtaDF0cW1sc3FrdHBzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PiAhRg0GoVsTqdP1qo/giphy.gif"
  },
  "joyful-vibes": {
    src: "https://www.youtube.com/embed/gcYGwcUmjZo",
    text: "Feel the Joyful Vibes! 😊",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWx5N3loMXkyNWU1YzE2OXpmeG9xam9hcGtkdTFhaGY1OWdvd3RzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7zwiRiYY29ozcPOD6o/giphy.gif"
  },
  "love-anthem": {
    src: "https://www.youtube.com/embed/KxCjVIFxZNo",
    text: "This is the Love Anthem! 🎶",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVsbXhpM3R4ZTk0YWtucmh0bzY5aWgxZnNyOHhiNWFvOTZzNDMwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kWPy9fPVPyBs6eOiRm/giphy.gif"
  },
  "rajsthani-love": {
    src: "https://www.youtube.com/embed/1gukvtH_a3I",
    text: "Celebrate Life's Moments! 🌟",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExem5veW5vYWl4bnplY203bW9lNDZqODkydGNubmZoMGVwOGJ4aWcxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BIMtBMvFziSd7sFh4f/giphy.gif"
  },
  "forever-bond": {
    src: "https://www.youtube.com/embed/g1yirsZQCAE",
    text: "Stay Together With Me Buddy! 🎵",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGpkNHd2b3Z2OXFuZjVmMmlzd2lnbjQwMnVvNzZ3NmhkbzJmOWgxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fxKofh8lspWWfZZdmj/giphy.gif"
  },
  "pal-pal": {
    src: "https://www.youtube.com/embed/T53pDKTLvcY",
    text: "Pal Pal Har Pal..! 🎊",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5pcDJjZ3JsbG80d2dnODhmOW1hNmNiMDExeWJqaXp0cXZmNHhxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VtnOlTAmKYqDgg8Osr/giphy.gif"
  },
  "party-night": {
    src: "https://www.youtube.com/embed/CeUyzVMwJTI",
    text: "It's Party Night! 🌙",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3MzeW5iM2FtMWNhYzF3bHphZGY5Y29xcm5qM3VtMmk0ZG8zeTBweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/McNHek8WfyEA8/giphy.gif"
  },
  "celebration-beats": {
    src: "https://www.youtube.com/embed/sPiOMuvzSI8",
    text: "Feel the Celebration Beats! 🥁",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZhMGNkNTRwb3E5N2xqcjZhZXcxNjFoOTN6cG9tODlwMWQ0d28wNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pS9YKYIDbO3vO/giphy.gif"
  },
  "chaand-ka-tukda": {
    src: "https://www.youtube.com/embed/S0WPSYFm7iE",
    text: "Tu Mera Chaand! 🌙",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb29rYXlmY3N1bWdlZXRoZDBna3EzdjM4dzBkdmx3cmFjaDNoYTc5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1na6z4ubSNzzBi9xbb/giphy.gif"
  },
  "fun-filled-day": {
    src: "https://www.youtube.com/embed/shDZohUn9HQ",
    text: "Have a Fun-Filled Day! 🌞",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjliNzV4OXAwNW11bWVmNDRydXprY3M2MG1vY25hZ2dkaDhubHUxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LqX3jrVCF4o0wbDyYt/giphy.gif"
  },
  "special-moments": {
    src: "https://www.youtube.com/embed/NFsEqOBG51M",
    text: "Celebrate Special Moments! 🌈",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnNzYzhhM3A3YmlhbjhmaHc0eTZhbjFtNTdhdm93b3l3bjZjN3ZqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZcKDWNzkQ9tOsV9LXp/giphy.gif"
  },
  "happy-times": {
    src: "https://www.youtube.com/embed/k3ijQJjUbTs",
    text: "Relish the Happy Times! 😍",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTh3ZmExNGxqeHFtYXJqYW1uN29yaDAxZnhyenY1dW1sN3Fyc21ndCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2S8OsTaMhaJxQ4cvwu/giphy.gif"
  },
  "birthday-celebration": {
    src: "https://www.youtube.com/embed/YrJ6OZ7VVWc",
    text: "Join the Birthday Celebration! 🎁",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JwZGh6dmV1dnliODU3bnZwcDFkeXo4am8yMnNvZ3NncWNlcW5ndyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ktU8kAKsyIauRSOoZs/giphy.gif"
  },
  "party-mode": {
    src: "https://www.youtube.com/embed/TiCA74oJTzw",
    text: "Switch to Party Mode! 🔊",
    gif: "https://media1.tenor.com/m/TmJWz4ZkSfQAAAAC/claire-dancing.gif"
  },
  "enjoy-the-moment": {
    src: "https://www.youtube.com/embed/Dm1ZOpRTq8I",
    text: "Enjoy the Moment! 🕒",
    gif: "https://media.tenor.com/RuhXmW0PA3kAAAAi/birthday-happy-birthday.gif"
  },
  "kanha-vibes": {
    src: "https://www.youtube.com/embed/40nM_1HZMZE",
    text: "Radha-Krishna Vibes 🌸",
    gif: "https://media1.tenor.com/m/u8APLaZMdD8AAAAC/radha-krishna-bhajan-radha-krishna-blessings.gif"
  }
};


const YouTubePlayerPage = () => {
  const [searchParams] = useSearchParams();
  const playKey = searchParams.get("play");
  const selectedMedia = mediaMap[playKey];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500); // fade in delay
    return () => clearTimeout(timeout);
  }, []);

  if (!selectedMedia) {
    return (
      <div className="page-container center-text">
        <h2 className="highlight-text">Oops! No song selected 🥺</h2>
      </div>
    );
  }

  return (
    <div className="page-container love-bg">
      <div className={`media-card ${visible ? "fade-in" : ""}`}>
        <div className="gif-container left-gif">
          <img src={selectedMedia.gif} alt="love gif" />
        </div>

        <div className="content-center">
          <h2 className="highlight-text animate-text">{selectedMedia.text}</h2>
          <div className="video-frame">
            <iframe
              width="100%"
              height="315"
              src={selectedMedia.src}
              title="YouTube Player"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="gif-container right-gif">
          <img src={selectedMedia.gif} alt="love gif" />
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayerPage;
