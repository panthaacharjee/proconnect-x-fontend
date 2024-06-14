import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BillingComponent.css";
import { toast } from "react-toastify";
import MetaData from "../MetaData";

const BillingComponent = ({ billingData }) => {
  const history = useNavigate();

  const [number, setNumber] = useState(null);
  const [amount, setAmount] = useState(null);
  const [pin, setPin] = useState(null);

  const handleConfirm = () => {
    if (number === null) {
      toast("Number is Required");
    } else if (amount === null) {
      toast("Amount is Required");
    } else if (pin === null) {
      toast("PIN is Required");
    } else {
      alert("Payment Successfull");
      history("/account");
    }
  };

  useEffect(() => {
    if (billingData === undefined) {
      history("/account");
    }
  }, [billingData]);
  return (
    <div className="payment-container">
      <MetaData title={`Billing (${billingData.cat})`} />
      <div className="payment-box">
        <div>
          <img src={billingData.pic} />
          <h4>{billingData.name} Wallet</h4>
        </div>
        <input
          placeholder={`Enter your ${billingData.name} wallet number`}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
        />
        {billingData.cat === "withdraw" ? (
          <input
            placeholder={`Enter Withdraw amount`}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        ) : (
          <input
            placeholder={`Enter Deposit amount`}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        )}
        <input
          placeholder={`Enter your ${billingData.name} PIN`}
          type="password"
          onChange={(e) => setPin(e.target.value)}
        />
        <div>
          <button onClick={() => history("/account")}>CLOSE</button>
          <button onClick={handleConfirm}>CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default BillingComponent;
