import React, { useState } from "react";
import './Popup.css'

interface Deduction {
  name: string;
  amount: number;
}

interface PopupDeductionsProps {
  totalDeductions: number;
  setTotalDeductions: (totalDeductions: number) => void;
  setShowDeductionsPopup: (show: boolean) => void;
  onAddDeduction: (deduction: Deduction) => void;
}

const PopupDeductions: React.FC<PopupDeductionsProps> = ({
  totalDeductions,
  setTotalDeductions,
  setShowDeductionsPopup,
  onAddDeduction,
}) => {
  const [deductionName, setDeductionName] = useState<string>("");
  const [deductionAmount, setDeductionAmount] = useState<string>("");
  const [deductions, setDeductions] = useState<Deduction[]>([]);

  const handleAddDeduction = () => {
    const parsedAmount = parseFloat(deductionAmount);
    if (!isNaN(parsedAmount) && deductionName.trim() !== "") {
      const newDeduction = { name: deductionName, amount: parsedAmount };

      setTotalDeductions(totalDeductions + parsedAmount);
      setDeductions([...deductions, newDeduction]);
      onAddDeduction(newDeduction);
      setDeductionName("");
      setDeductionAmount("");
      setShowDeductionsPopup(false); // Close the popup after adding deduction
    } else {
      alert("Please enter valid deduction details.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Add New Deduction</h2>
        <label htmlFor="deductionName">Deduction Name</label>
        <br />
        <input
          type="text"
          id="deductionName"
          value={deductionName}
          onChange={(e) => setDeductionName(e.target.value)}
          placeholder="Eg: Tax"
        />
        <br />
        <label htmlFor="deductionAmount">Deduction Amount</label>
        <br />
        <input
          type="number"
          id="deductionAmount"
          value={deductionAmount}
          onChange={(e) => setDeductionAmount(e.target.value)}
          placeholder="Eg: 10000"
        />
        <button onClick={handleAddDeduction}>Add</button>
        <button onClick={() => setShowDeductionsPopup(false)}>Close</button>

        
        <ul>
          {deductions.map((deduction, index) => (
            <li key={index}>
              {deduction.name}: {deduction.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopupDeductions;
