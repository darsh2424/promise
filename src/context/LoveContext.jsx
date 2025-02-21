import React, { createContext, useState, useContext } from "react";

const LoveContext = createContext();

export const LoveProvider = ({ children }) => {
  const [isLoved, setIsLoved] = useState(false);
  const [isPromised, setIsPromised] = useState(false);
  const [isMarried, setIsMarried] = useState(false);

  return (
    <LoveContext.Provider value={{ isLoved, setIsLoved, isPromised, setIsPromised, isMarried, setIsMarried }}>
      {children}
    </LoveContext.Provider>
  );
};

export const useLove = () => useContext(LoveContext);
