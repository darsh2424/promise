import React from "react";

const MediaGrid = ({ media, question, onYes, onNo, yesText = "Yes", noText = "No" }) => {
  return (
    <div className="media-container">
      <h2>{question}</h2>
      <div className="media-grid">
        {media.map((item, index) => (
          <div key={index} className="media-item">
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <div className="audio-item">
                <img src={item.poster} alt={item.alt} className="audio-poster" />
                <audio controls>
                  <source src={item.audio} type="audio/mp3" />
                </audio>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="btn-group">
        <button className="yes-button" onClick={onYes}>{yesText}</button>
        <button className="no-button" onClick={onNo}>{noText}</button>
      </div>
    </div>
  );
};

export default MediaGrid;
