import React from "react";

interface DisplayProps {
  salary: string;
  totalEarnings: number;
  totalEarningsForEPF: number;
  totalDeductions: number;
}

const Display: React.FC<DisplayProps> = ({
  salary,
  totalEarnings,
  totalEarningsForEPF,
  totalDeductions,
}) => {
  return (
    <div className="display">
      <h1>Salary Details</h1>
      <p>Basic Salary: {salary}</p>
      <p>Total Earnings: {totalEarnings}</p>
      <p>Total Earnings for EPF/ETF: {totalEarningsForEPF}</p>
      <p>Total Deductions: {totalDeductions}</p>
    </div>
  );
};

export default Display;
