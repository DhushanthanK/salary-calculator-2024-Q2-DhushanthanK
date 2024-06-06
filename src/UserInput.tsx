import React from "react";
import { usePopupContext } from "./PopupContext";
import PopupEarnings from "./PopupEarnings";
import PopupDeductions from "./PopupDeduction";

interface UserInputProps {
  salary: number;
  setSalary: (salary: number) => void;
  totalEarnings: number;
  setTotalEarnings: (totalEarnings: number) => void;
  totalEarningsForEPF: number;
  setTotalEarningsForEPF: (totalEarningsForEPF: number) => void;
  totalDeductions: number;
  setTotalDeductions: (totalDeductions: number) => void;
}

const UserInput: React.FC<UserInputProps> = ({
  salary,
  setSalary,
  totalEarnings,
  setTotalEarnings,
  totalEarningsForEPF,
  setTotalEarningsForEPF,
  totalDeductions,
  setTotalDeductions,
}) => {
  const { setShowEarningsPopup, setShowDeductionsPopup } = usePopupContext();

  return (
    <div className="calculator">
      <h1>Calculate your salary</h1>

      <div className="input-box">
        <h2>Basic Salary</h2>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(parseFloat(e.target.value))}
          placeholder="Enter your basic salary"
        />
      </div>

      <div className="container">
        <h2>Earnings</h2>
        <p>Allowances, fixed allowances, bonuses, etc.</p>
        <button onClick={() => setShowEarningsPopup(true)}>Add New Allowance</button>
      </div>

      <div className="container">
        <h2>Deductions</h2>
        <p>Salary Advances, Loan Deductions, etc.</p>
        <button onClick={() => setShowDeductionsPopup(true)}>Add New Deduction</button>
      </div>

      <PopupEarnings
        totalEarnings={totalEarnings}
        setTotalEarnings={setTotalEarnings}
      />
      <PopupDeductions
        totalDeductions={totalDeductions}
        setTotalDeductions={setTotalDeductions}
      />
    </div>
  );
};

export default UserInput;
