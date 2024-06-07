import React from "react";
import Display from "./Display";

interface SalaryCalculatorProps {
  salary: number;
  setSalary: (salary: number) => void;
  totalEarnings: number;
  setTotalEarnings: (totalEarnings: number) => void;
  totalEarningsEPF_ETF: number;
  setTotalEarningsForEPF: (totalEarningsEPF_ETF: number) => void;
  totalDeductions: number;
  setTotalDeductions: (totalDeductions: number) => void;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({
  salary,
  totalEarnings,
  totalEarningsEPF_ETF,
  totalDeductions,
}) => {
  const basicSalary = salary;
  const grossEarnings = basicSalary + totalEarnings + totalEarningsEPF_ETF;
  const grossDeductions = totalDeductions;
  const employeeEPF = (basicSalary + totalEarningsEPF_ETF - totalDeductions) * 0.08;
  const employerEPF = (basicSalary + totalEarningsEPF_ETF - totalDeductions) * 0.12;
  const employerETF = (basicSalary + totalEarningsEPF_ETF - totalDeductions) * 0.03;

 
  let apit = 0;
  const taxPercentages = [
    { threshold: 100000, percentage: 0, constant: 0 },
    { threshold: 141667, percentage: 6, constant: 6000 },
    { threshold: 183333, percentage: 12, constant: 14500 },
    { threshold: 225000, percentage: 18, constant: 25500 },
    { threshold: 266667, percentage: 24, constant: 39000 },
    { threshold: 308333, percentage: 30, constant: 55000 },
    { threshold: 308334, percentage: 36, constant: 73500 },
  ];

  for (let i = 0; i < taxPercentages.length; i++) {
    const { threshold, percentage, constant } = taxPercentages[i];
    if (grossEarnings <= threshold) {
      apit = ((basicSalary + totalEarningsEPF_ETF - totalDeductions) * percentage) / 100 - constant;
      break;
    }
  }

  const netSalary = grossEarnings - grossDeductions - employeeEPF - apit;
  const ctc = grossEarnings - grossDeductions + employerEPF + employerETF;


  return (
    <Display
      salary={basicSalary}
      grossEarnings={grossEarnings}
      grossDeductions={grossDeductions}
      netSalary={netSalary}
      employeeEPF={employeeEPF}
      employerEPF={employerEPF}
      employerETF={employerETF}
      apit={apit}
      ctc={ctc}
      
    />
  );
};

export default SalaryCalculator;
