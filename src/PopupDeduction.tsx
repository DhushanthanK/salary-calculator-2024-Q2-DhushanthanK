import { useState } from "react";
import { usePopupContext } from "./PopupContext";

function PopupDeductions({ onAdd }: { onAdd: (name: string, amount: string) => void }) {
  const { showDeductionsPopup, setShowDeductionsPopup } = usePopupContext();
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
    setShowDeductionsPopup(false);
  };

  const handleClose = () => {
    setName("");
    setAmount("");
    setIsChecked(false);
    setShowDeductionsPopup(false);
  };

  return showDeductionsPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Add New Deduction</h3>
        <label>Deduction Name:</label>
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

export default PopupDeductions;
