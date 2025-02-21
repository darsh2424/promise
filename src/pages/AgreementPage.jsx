import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { useLove } from "../context/LoveContext";
import carLoader from "../assets/car-loader.gif";
import '../styles/Agreement.css';
const AgreementPage = () => {
  const { setIsPromised } = useLove();
  const navigate = useNavigate();
  const signCanvasRef = useRef(null);
  const agreementRef = useRef(null);
  const [signed, setSigned] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userSignature, setUserSignature] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClear = () => {
    signCanvasRef.current.clear();
    setSigned(false);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (signCanvasRef.current.isEmpty()) {
      setErrorMessage("⚠️ Please sign before proceeding!");
      return;
    }
    setSigned(true);
    setUserSignature(signCanvasRef.current.toDataURL());
    setLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      setLoading(false);
      setShowAgreement(true);
      setIsPromised(true);
      setTimeout(() => {
        agreementRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }, 3000);
  };

  const handleNext = () => {
    navigate("/marriage");
  };

  return (
    <div className="agreement-container">
      {!showAgreement ? (
        <>
          <h2 className="love-heading">✍ Sign Your Love Promise 💖</h2>
          <p className="love-text">Use your finger (mobile) or mouse (PC) to sign.</p>

          <div className="signature-box">
            <SignatureCanvas
              ref={signCanvasRef}
              penColor="black"
              canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-group">
            <button className="love-btn clear-btn" onClick={handleClear}>Clear</button>
            <button className="love-btn submit-btn" onClick={handleSubmit}>Submit</button>
          </div>

          {loading && <img src={carLoader} alt="Loading..." className="loader-car" />}
        </>
      ) : (
        <div className="agreement-paper fade-in" ref={agreementRef}>
          <h2 className="love-heading">💍 Love Agreement</h2>
          <p className="love-text">
            This agreement is signed by <b>YOU</b> as a <b>Forever Love Partner</b>.
            By signing this, you promise that:
          </p>
          <ul className="love-list">
            <li> You will always be mine.</li>
            <li> You can chat with me anytime.</li>
            <li> You won’t leave me, no matter what.</li>
            <li> You will remember this moment forever.</li>
            <li> We will cherish our bond and never break this agreement.</li>
          </ul>

          <h3 className="love-heading">Signature:</h3>
          <img src={userSignature} alt="User Signature" className="signature-preview" />

          <button className="love-btn next-btn" onClick={handleNext}>Proceed to Marriage 💒</button>
        </div>
      )}
    </div>
  );
};

export default AgreementPage;
