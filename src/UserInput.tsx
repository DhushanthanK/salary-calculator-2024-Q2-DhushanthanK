import React, { useState } from "react";
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
  const [showEarningsPopup, setShowEarningsPopup] = useState<boolean>(false);
  const [showDeductionsPopup, setShowDeductionsPopup] = useState<boolean>(false);

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSalary(isNaN(value) ? 0 : value);
  };

  return (
    <div className="calculator">
      <h1>Calculate your salary</h1>
      <div className="input-box">
        <h2>Basic Salary</h2>
        <input
          type="number"
          value={salary || ""}
          onChange={handleSalaryChange}
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

      {showEarningsPopup && (
        <PopupEarnings
          totalEarnings={totalEarnings}
          setTotalEarnings={setTotalEarnings}
          totalEarningsForEPF={totalEarningsForEPF}
          setTotalEarningsForEPF={setTotalEarningsForEPF}
          setShowEarningsPopup={setShowEarningsPopup}
        />
      )}
      {showDeductionsPopup && (
        <PopupDeductions
          totalDeductions={totalDeductions}
          setTotalDeductions={setTotalDeductions}
          setShowDeductionsPopup={setShowDeductionsPopup}
        />
      )}
    </div>
  );
};

export default UserInput;
