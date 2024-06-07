import React from "react";
import "./Display.css";

interface DisplayProps {
  salary: number;
  grossEarnings: number;
  grossDeductions: number;
  netSalary: number;
  employeeEPF: number;
  employerEPF: number;
  employerETF: number;
  apit: number;
  ctc: number;
  isGrayed: boolean;
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
  isGrayed,
}) => {
  return (
    <div className={`display ${isGrayed ? 'grayed' : ''}`}>
      <h1 className="YourSalaryText">Your Salary</h1>
      <table className="info-table">
        <tbody>
          <tr>
            <td>Item</td>
            <td>Amount</td>
          </tr>
          <tr>
            <td>Basic Salary</td>
            <td>{salary.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Earnings</td>
            <td>{grossEarnings.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Deductions</td>
            <td>{grossDeductions.toFixed(2)}</td>
          </tr>
          <tr>
            <td>APIT</td>
            <td>{apit.toFixed(2)}</td>
          </tr>
          <tr className="bold-row">
            <td>Net Salary</td>
            <td>{netSalary.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employee EPF</td>
            <td>{employeeEPF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employer EPF</td>
            <td>{employerEPF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Employer ETF</td>
            <td>{employerETF.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Cost to Company (CTC)</td>
            <td>{ctc.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Display;
