import React, { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextProps {
  showEarningsPopup: boolean;
  setShowEarningsPopup: (show: boolean) => void;
  showDeductionsPopup: boolean;
  setShowDeductionsPopup: (show: boolean) => void;
}

interface PopupProviderProps {
  children: ReactNode;
}

const PopupContext = createContext<PopupContextProps>({
  showEarningsPopup: false,
  setShowEarningsPopup: () => {},
  showDeductionsPopup: false,
  setShowDeductionsPopup: () => {},
});

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [showEarningsPopup, setShowEarningsPopup] = useState(false);
  const [showDeductionsPopup, setShowDeductionsPopup] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        showEarningsPopup,
        setShowEarningsPopup,
        showDeductionsPopup,
        setShowDeductionsPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => useContext(PopupContext);
