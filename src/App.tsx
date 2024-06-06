import UserInput from "./UserInput";
import { PopupProvider } from "./PopupContext";

function App() {
  return (
    <PopupProvider>
      <div className="App">
        <UserInput />
      </div>
    </PopupProvider>
  );
}

export default App;
