import React, { useState } from "react";
import './Popup.css'

interface PopupEarningsProps {
  totalEarnings: number;
  setTotalEarnings: (totalEarnings: number) => void;
  totalEarningsForEPF: number;
  setTotalEarningsForEPF: (totalEarningsForEPF: number) => void;
  setShowEarningsPopup: (show: boolean) => void;
}

const PopupEarnings: React.FC<PopupEarningsProps> = ({
  totalEarnings,
  setTotalEarnings,
  totalEarningsForEPF,
  setTotalEarningsForEPF,
  setShowEarningsPopup,
}) => {
  const [allowanceName, setAllowanceName] = useState<string>("");
  const [allowanceAmount, setAllowanceAmount] = useState<string>("");
  const [includeEPF, setIncludeEPF] = useState<boolean>(false);
  const [allowances, setAllowances] = useState<
    { name: string; amount: number; epf: boolean }[]
  >([]);

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

      setAllowances([...allowances, newAllowance]);
      setAllowanceName("");
      setAllowanceAmount("");
      setIncludeEPF(false);
    } else {
      alert("Please enter valid allowance details.");
    }
  };

  return (
    <div className="popup">
      <h2>Add New Allowance</h2>
      <label htmlFor="allowanceName">Earnings Name</label>
      <br></br>
      <input
        type="text"
        id="allowanceName"
        value={allowanceName}
        onChange={(e) => setAllowanceName(e.target.value)}
        placeholder="Eg: Travel"
      />
      <br></br>
      <label htmlFor="allowanceAmount">Earnings Amount</label>
      <br></br>
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

      <h3>Added Allowances</h3>
      <ul>
        {allowances.map((allowance, index) => (
          <li key={index}>
            {allowance.name}: {allowance.amount}{" "}
            {allowance.epf && "(Included in EPF/ETF)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopupEarnings;
