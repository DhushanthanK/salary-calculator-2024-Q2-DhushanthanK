import React from "react";
import { usePopupContext } from "./PopupContext";
import PopupEarnings from "./PopupEarnings";
import PopupDeductions from "./PopupDeduction";

interface UserInputProps {
  salary: string;
  setSalary: (salary: string) => void;
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

  const [earnings, setEarnings] = React.useState<string[]>([]);
  const [deductions, setDeductions] = React.useState<string[]>([]);

  const handleAddEarnings = (
    name: string,
    amount: string,
    isChecked: boolean
  ) => {
    const earningsAmount = parseInt(amount);
    const earningsEntry = isChecked
      ? `${name}: ${amount} EPF/ETF`
      : `${name}: ${amount}`;
    setEarnings([...earnings, earningsEntry]);
    setTotalEarnings(totalEarnings + earningsAmount);

    if (isChecked) {
      setTotalEarningsForEPF(totalEarningsForEPF + earningsAmount);
    }

    setShowEarningsPopup(false);
  };

  const handleAddDeductions = (name: string, amount: string) => {
    const deductionAmount = parseInt(amount);
    setDeductions([...deductions, `${name}: ${amount}`]);
    setTotalDeductions(totalDeductions + deductionAmount);
    setShowDeductionsPopup(false);
  };

  return (
    <div className="calculator">
      <h1>Calculate your salary</h1>

      <h2>Basic Salary</h2>
      <div className="input-box">
        <form>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </form>
      </div>

      <div className="container">
        <h2>Earnings</h2>
        <p>Allowances, fixed allowances, bonuses, etc.</p>
        {earnings.map((earning, index) => (
          <div className="input-container" key={index}>
            <input type="text" value={earning} readOnly />
          </div>
        ))}
        <button className="Add" onClick={() => setShowEarningsPopup(true)}>
          <span className="materials-symbols-outlined add-icon"> + </span>Add
          New Allowance
        </button>
      </div>

      <div className="container">
        <h2>Deductions</h2>
        <p>Salary Advances, Loan Deductions and all.</p>
        {deductions.map((deduction, index) => (
          <div className="input-container" key={index}>
            <input type="text" value={deduction} readOnly />
          </div>
        ))}
        <button className="Add" onClick={() => setShowDeductionsPopup(true)}>
          <span className="materials-symbols-outlined add-icon"> + </span>Add
          New Deduction
        </button>
      </div>

      <PopupEarnings onAdd={handleAddEarnings} />
      <PopupDeductions onAdd={handleAddDeductions} />
    </div>
  );
};

export default UserInput;
