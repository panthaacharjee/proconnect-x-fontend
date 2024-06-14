import React from "react";
import { useNavigate } from "react-router-dom";

const Billing = ({ val, setBillingData }) => {
  const history = useNavigate();
  const handleBill = () => {
    setBillingData(val);
    history(`/billing/${val.name}`);
  };
  return (
    <div onClick={handleBill}>
      <img src={val.pic} className="payment-img" />
      <p>{val.name}</p>
    </div>
  );
};

export default Billing;
