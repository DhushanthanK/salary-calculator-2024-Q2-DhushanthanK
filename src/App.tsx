import React, { useState } from "react";
import { PopupProvider } from "./PopupContext";
import UserInput from "./UserInput";
import SalaryCalculator from "./SalaryCalculator";

const App: React.FC = () => {
  const [salary, setSalary] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalEarningsForEPF, setTotalEarningsForEPF] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);

  return (
    <PopupProvider>
      <div className="App">
        <UserInput
          salary={salary}
          setSalary={setSalary}
          totalEarnings={totalEarnings}
          setTotalEarnings={setTotalEarnings}
          totalEarningsForEPF={totalEarningsForEPF}
          setTotalEarningsForEPF={setTotalEarningsForEPF}
          totalDeductions={totalDeductions}
          setTotalDeductions={setTotalDeductions}
        />
        <SalaryCalculator
          salary={salary}
          setSalary={setSalary}
          totalEarnings={totalEarnings}
          setTotalEarnings={setTotalEarnings}
          totalEarningsEPF_ETF={totalEarningsForEPF}
          setTotalEarningsForEPF={setTotalEarningsForEPF}
          totalDeductions={totalDeductions}
          setTotalDeductions={setTotalDeductions}
        />
      </div>
    </PopupProvider>
  );
};

export default App;
