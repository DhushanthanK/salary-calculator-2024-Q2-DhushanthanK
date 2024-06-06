import React, { useState } from "react";
import UserInput from "./UserInput";
import Display from "./Display";
import { PopupProvider } from "./PopupContext";

function App() {
  const [salary, setSalary] = useState("");
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
        <Display
          salary={salary}
          totalEarnings={totalEarnings}
          totalEarningsForEPF={totalEarningsForEPF}
          totalDeductions={totalDeductions}
        />
      </div>
    </PopupProvider>
  );
}

export default App;
