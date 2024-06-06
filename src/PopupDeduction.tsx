import React, { useState } from "react";
import { usePopupContext } from "./PopupContext";

interface PopupDeductionsProps {
  totalDeductions: number;
  setTotalDeductions: (totalDeductions: number) => void;
}

const PopupDeductions: React.FC<PopupDeductionsProps> = ({
  totalDeductions,
  setTotalDeductions,
}) => {
  const { showDeductionsPopup, setShowDeductionsPopup } = usePopupContext();
  const [newDeductionName, setNewDeductionName] = useState("");
  const [newDeductionAmount, setNewDeductionAmount] = useState("");

  const handleAddDeduction = () => {
    setTotalDeductions(totalDeductions + parseFloat(newDeductionAmount));
    setShowDeductionsPopup(false);
  };

  if (!showDeductionsPopup) return null;

  return (
    <div className="popup">
      <h2>Add New Deduction</h2>
      <input
        type="text"
        value={newDeductionName}
        onChange={(e) => setNewDeductionName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={newDeductionAmount}
        onChange={(e) => setNewDeductionAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddDeduction}>Add</button>
      <button onClick={() => setShowDeductionsPopup(false)}>Cancel</button>
    </div>
  );
};

export default PopupDeductions;
