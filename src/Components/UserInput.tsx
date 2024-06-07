import React, { useState } from "react";
import PopupEarnings from "./PopupEarnings";
import PopupDeductions from "./PopupDeduction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { NumericFormat } from "react-number-format";
import "../styles/UserInput.css";

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
  const [showDeductionsPopup, setShowDeductionsPopup] =
    useState<boolean>(false);
  const [allowances, setAllowances] = useState<Allowance[]>([]);
  const [deductions, setDeductions] = useState<Deduction[]>([]);

  const handleSalaryChange = (values: {
    value: string;
    floatValue: number | undefined;
  }) => {
    const { floatValue } = values;
    setSalary(floatValue ?? 0);
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
      <div className="salary-text-button">
        <h1 className="CalculateYourSalaryText">Calculate your salary</h1>
        <button className="reset-button" onClick={handleReset}>
          <FontAwesomeIcon icon={faUndoAlt} /> Reset
        </button>
      </div>
      <div className="SalaryContainer">
        <h2 className="BasicSalaryText">Basic Salary</h2>
        <NumericFormat
          className="BasicSalaryUserInputBox"
          value={salary}
          onValueChange={handleSalaryChange}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          placeholder="Enter your basic salary"
        />
      </div>

      <div className="EarningsContainer">
        <h2 className="Earnings">Earnings</h2>
        <p className="AllowanceText">
          Allowances, fixed allowances, bonuses, etc.
        </p>
        <button
          className="AddNewAllowanceButton"
          onClick={() => setShowEarningsPopup(true)}
        >
          {" "}
          + Add New Allowance
        </button>
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
      </div>

      <div className="DeductionContainer">
        <h2 className="DeductionsText">Deductions</h2>
        <p className="SalaryAdvancesText">
          Salary Advances, Loan Deductions, etc.
        </p>
        <button
          className="AddNewAllowanceButton"
          onClick={() => setShowDeductionsPopup(true)}
        >
          {" "}
          + Add New Deduction
        </button>
        <div>
          <ul>
            {deductions.map((deduction, index) => (
              <li key={index}>
                {deduction.name}: {deduction.amount}{" "}
              </li>
            ))}
          </ul>
        </div>
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
    </div>
  );
};

export default UserInput;
