import React, { useState } from "react";
import PopupEarnings from "./PopupEarnings";
import PopupDeductions from "./PopupDeduction";
import "./UserInput.css";

interface Allowance {
  name: string;
  amount: number;
  epf: boolean;
}

interface Deduction {
  name: string;
  amount: number;
}

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
  const [allowances, setAllowances] = useState<Allowance[]>([]);
  const [deductions, setDeductions] = useState<Deduction[]>([]);

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSalary(isNaN(value) ? 0 : value);
  };

  const handleAddAllowance = (newAllowance: Allowance) => {
    setAllowances([...allowances, newAllowance]);
  };

  const handleAddDeduction = (newDeduction: Deduction) => {
    setDeductions([...deductions, newDeduction]);
  };

  const handleReset = () => {
    setSalary(0);
    setTotalEarnings(0);
    setTotalEarningsForEPF(0);
    setTotalDeductions(0);
    setAllowances([]);
    setDeductions([]);
  };

  return (
    <div className="calculator">
      <h1 className="CalculateYourSalaryText">Calculate your salary</h1>
      <div className="SalaryContainer">
        <h2 className="BasicSalaryText">Basic Salary</h2>
        <input
          className="BasicSalaryUserInputBox"
          value={salary || ""}
          onChange={handleSalaryChange}
          placeholder="Enter your basic salary"
        />
      </div>

      <div className="EarningsContainer">
        <h2 className="Earnings">Earnings</h2>
        <p className="AllowanceText">Allowances, fixed allowances, bonuses, etc.</p>
        <button className = "AddNewAllowanceButton" onClick={() => setShowEarningsPopup(true)}> + Add New Allowance</button>
      </div>

      <div className="DeductionContainer">
        <h2 className="DeductionsText">Deductions</h2>
        <p className="SalaryAdvancesText">Salary Advances, Loan Deductions, etc.</p>
        <button className = "AddNewDeductionButton" onClick={() => setShowDeductionsPopup(true)}> + Add New Deduction</button>
      </div>

      {showEarningsPopup && (
        <PopupEarnings
          totalEarnings={totalEarnings}
          setTotalEarnings={setTotalEarnings}
          totalEarningsForEPF={totalEarningsForEPF}
          setTotalEarningsForEPF={setTotalEarningsForEPF}
          setShowEarningsPopup={setShowEarningsPopup}
          onAddAllowance={handleAddAllowance}
        />
      )}
      {showDeductionsPopup && (
        <PopupDeductions
          totalDeductions={totalDeductions}
          setTotalDeductions={setTotalDeductions}
          setShowDeductionsPopup={setShowDeductionsPopup}
          onAddDeduction={handleAddDeduction}
        />
      )}

      <div>
        <ul>
          {allowances.map((allowance, index) => (
            <li key={index}>
              {allowance.name}: {allowance.amount}{" "}
              {allowance.epf && "(Included in EPF/ETF)"}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {deductions.map((deduction, index) => (
            <li key={index}>
              {deduction.name}: {deduction.amount}{" "}
            </li>
          ))}
        </ul>
      </div>

      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UserInput;
