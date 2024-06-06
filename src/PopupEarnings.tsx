import React, { useState } from "react";
import { usePopupContext } from "./PopupContext";

interface PopupEarningsProps {
  totalEarnings: number;
  setTotalEarnings: (totalEarnings: number) => void;
}

const PopupEarnings: React.FC<PopupEarningsProps> = ({
  totalEarnings,
  setTotalEarnings,
}) => {
  const { showEarningsPopup, setShowEarningsPopup } = usePopupContext();
  const [newEarningName, setNewEarningName] = useState("");
  const [newEarningAmount, setNewEarningAmount] = useState("");

  const handleAddEarning = () => {
    setTotalEarnings(totalEarnings + parseFloat(newEarningAmount));
    setShowEarningsPopup(false);
  };

  if (!showEarningsPopup) return null;

  return (
    <div className="popup">
      <h2>Add New Earning</h2>
      <input
        type="text"
        value={newEarningName}
        onChange={(e) => setNewEarningName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={newEarningAmount}
        onChange={(e) => setNewEarningAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddEarning}>Add</button>
      <button onClick={() => setShowEarningsPopup(false)}>Cancel</button>
    </div>
  );
};

export default PopupEarnings;
