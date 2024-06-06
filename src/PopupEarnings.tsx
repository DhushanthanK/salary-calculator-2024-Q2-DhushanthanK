import { useState } from "react";
import { usePopupContext } from "./PopupContext";

function PopupEarnings({ onAdd }: { onAdd: (name: string, amount: string) => void }) {
  const { showEarningsPopup, setShowEarningsPopup } = usePopupContext();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleAdd = () => {
    if (name && amount) {
      onAdd(name, amount);
      setName("");
      setAmount("");
      setIsChecked(false);
    }
    setShowEarningsPopup(false);
  };

  const handleClose = () => {
    setName("");
    setAmount("");
    setIsChecked(false);
    setShowEarningsPopup(false);
  };

  return showEarningsPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Add New Earnings</h3>
        <label>Earnings Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Amount:</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <label>
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          EPF/ETF
        </label>
        <button className="AddButton" onClick={handleAdd}>Add</button>
        <button className="CloseButton" onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
}

export default PopupEarnings;
