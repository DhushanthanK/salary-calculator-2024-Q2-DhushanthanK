import React, { useState } from "react";
import "./Popup.css";

interface PopupEarningsProps {
  totalEarnings: number;
  setTotalEarnings: (totalEarnings: number) => void;
  totalEarningsForEPF: number;
  setTotalEarningsForEPF: (totalEarningsForEPF: number) => void;
  setShowEarningsPopup: (show: boolean) => void;
  onAddAllowance: (allowance: { name: string; amount: number; epf: boolean }) => void;
}
const PopupEarnings: React.FC<PopupEarningsProps> = ({
  totalEarnings,
  setTotalEarnings,
  totalEarningsForEPF,
  setTotalEarningsForEPF,
  setShowEarningsPopup,
  onAddAllowance,
}) => {
  const [allowanceName, setAllowanceName] = useState<string>("");
  const [allowanceAmount, setAllowanceAmount] = useState<string>("");
  const [includeEPF, setIncludeEPF] = useState<boolean>(false);

  const handleAddAllowance = () => {
    const parsedAmount = parseFloat(allowanceAmount);
    if (!isNaN(parsedAmount) && allowanceName.trim() !== "") {
      const newAllowance = {
        name: allowanceName,
        amount: parsedAmount,
        epf: includeEPF,
      };

      if (includeEPF) {
        setTotalEarningsForEPF(totalEarningsForEPF + parsedAmount);
      } else {
        setTotalEarnings(totalEarnings + parsedAmount);
      }

      onAddAllowance(newAllowance);
      setAllowanceName("");
      setAllowanceAmount("");
      setIncludeEPF(false);
      setShowEarningsPopup(false);
    } else {
      alert("Please enter valid allowance details.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Add New Allowance</h2>
        <label htmlFor="allowanceName">Earnings Name</label>
        <br />
        <input
          type="text"
          id="allowanceName"
          value={allowanceName}
          onChange={(e) => setAllowanceName(e.target.value)}
          placeholder="Eg: Travel"
        />
        <br />
        <label htmlFor="allowanceAmount">Earnings Amount</label>
        <br />
        <input
          type="number"
          id="allowanceAmount"
          value={allowanceAmount}
          onChange={(e) => setAllowanceAmount(e.target.value)}
          placeholder="Eg: 10000"
        />
        <label>
          <input
            type="checkbox"
            checked={includeEPF}
            onChange={(e) => setIncludeEPF(e.target.checked)}
          />
          EPF/ETF
        </label>
        <button onClick={handleAddAllowance}>Add</button>
        <button onClick={() => setShowEarningsPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default PopupEarnings;
