import React from "react";
import './Display.css'

interface DisplayProps {
  salary: number;
  grossEarnings: number;
  grossDeductions: number;
  netSalary: number;
  employeeEPF: number;
  employerEPF: number;
  employerETF: number;
  apit: number; // Add apit property
  ctc: number; // Add ctc property
  onReset: () => void;
}

const Display: React.FC<DisplayProps> = ({
  salary,
  grossEarnings,
  grossDeductions,
  netSalary,
  employeeEPF,
  employerEPF,
  employerETF,
  apit,
  ctc,
  onReset,
}) => {
  return (
    <div className="display">
      <h1>Salary Details</h1>
      <p>Basic Salary: {salary.toFixed(2)}</p>
      <p>Gross Earnings: {grossEarnings.toFixed(2)}</p>
      <p>Gross Deductions: {grossDeductions.toFixed(2)}</p>
      <p>APIT: {apit.toFixed(2)}</p>
      <p>Net Salary: {netSalary.toFixed(2)}</p>
      <p>Employee EPF: {employeeEPF.toFixed(2)}</p>
      <p>Employer EPF: {employerEPF.toFixed(2)}</p>
      <p>Employer ETF: {employerETF.toFixed(2)}</p>
      <p>Cost to Company (CTC): {ctc.toFixed(2)}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Display;
