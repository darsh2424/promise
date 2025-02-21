import React from "react";

const QuestionForm = ({ question, onYes, onNo, yesText = "Yes", noText = "No" }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="btn-group">
        <button className="yes-button" onClick={onYes}>{yesText}</button>
        <button className="no-button" onClick={onNo}>{noText}</button>
      </div>
    </div>
  );
};

export default QuestionForm;
