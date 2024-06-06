import React, { createContext, useContext, useState } from "react";

type PopupContextType = {
  showEarningsPopup: boolean;
  showDeductionsPopup: boolean;
  setShowEarningsPopup: (value: boolean) => void;
  setShowDeductionsPopup: (value: boolean) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopupContext must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showEarningsPopup, setShowEarningsPopup] = useState(false);
  const [showDeductionsPopup, setShowDeductionsPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ showEarningsPopup, showDeductionsPopup, setShowEarningsPopup, setShowDeductionsPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
