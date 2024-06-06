import React, { useState } from "react";
import Display from "./Display";

interface SalaryCalculatorProps {
  salary: number;
  setSalary: (salary: number) => void;
  totalEarnings: number;
  setTotalEarnings: (totalEarnings: number) => void;
  totalEarningsForEPF: number;
  setTotalEarningsForEPF: (totalEarningsForEPF: number) => void;
  totalDeductions: number;
  setTotalDeductions: (totalDeductions: number) => void;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({
  salary,
  setSalary,
  totalEarnings,
  setTotalEarnings,
  totalEarningsForEPF,
  setTotalEarningsForEPF,
  totalDeductions,
  setTotalDeductions,
}) => {
  const basicSalary = salary;
  const grossEarnings = basicSalary + totalEarnings;
  const grossDeductions = totalDeductions;
  const employeeEPF = (basicSalary + totalEarningsForEPF) * 0.08;
  const employerEPF = (basicSalary + totalEarningsForEPF) * 0.12;
  const employerETF = (basicSalary + totalEarningsForEPF) * 0.03;
  const netSalary = grossEarnings - grossDeductions;

  const handleReset = () => {
    setSalary(0);
    setTotalEarnings(0);
    setTotalEarningsForEPF(0);
    setTotalDeductions(0);
  };

  return (
    <Display
      salary={basicSalary}
      grossEarnings={grossEarnings}
      grossDeductions={grossDeductions}
      netSalary={netSalary}
      employeeEPF={employeeEPF}
      employerEPF={employerEPF}
      employerETF={employerETF}
      onReset={handleReset}
    />
  );
};

export default SalaryCalculator;
