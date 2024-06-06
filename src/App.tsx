import SalaryCalculator from "./SalaryCalculator";
import { PopupProvider } from "./PopupContext";

function App() {
  return (
    <PopupProvider>
      <div className="App">
        <h1>My App</h1>
        <SalaryCalculator />
      </div>
    </PopupProvider>
  );
}

export default App;
