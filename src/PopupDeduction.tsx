import { useState } from "react";
import { usePopupContext } from "./PopupContext";

function PopupDeductions({ onAdd }: { onAdd: (name: string, amount: string) => void }) {
  const { showDeductionsPopup, setShowDeductionsPopup } = usePopupContext();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    if (name && amount) {
      onAdd(name, amount);
      setName("");
      setAmount("");
    }
    setShowDeductionsPopup(false);
  };

  const handleClose = () => {
    setName("");
    setAmount("");
    setShowDeductionsPopup(false);
  };

  return showDeductionsPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Add New Deduction</h3>
        <label>Deduction Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Eg: Travel"/>
        <label>Amount:</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Eg: 10000"/>
        <button className="AddButton" onClick={handleAdd}>Add</button>
        <button className="CloseButton" onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
}

export default PopupDeductions;
