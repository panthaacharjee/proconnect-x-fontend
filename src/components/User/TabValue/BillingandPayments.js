import React from "react";
import Bkash from "../../../images/payment/bkash.png";
import Dbbl from "../../../images/payment/dbbl.jfif";
import Rocket from "../../../images/payment/rocket.png";
import visa from "../../../images/payment/visa.png";
import master from "../../../images/payment/master.png";
import { Link, useNavigate } from "react-router-dom";
import Billing from "../../CustomComponent/Billing";

const BillingandPayments = ({ setBillingData }) => {
  const withdrawArray = [
    {
      name: "Bkash",
      pic: Bkash,
      cat: "withdraw",
    },
    {
      name: "Rocket",
      pic: Rocket,
      cat: "withdraw",
    },
    {
      name: "Dbbl",
      pic: Dbbl,
      cat: "withdraw",
    },
    {
      name: "Visa",
      pic: visa,
      cat: "withdraw",
    },
    {
      name: "Master",
      pic: master,
      cat: "withdraw",
    },
  ];
  const depositArray = [
    {
      name: "Bkash",
      pic: Bkash,
      cat: "deposit",
    },
    {
      name: "Rocket",
      pic: Rocket,
      cat: "deposit",
    },
    {
      name: "Dbbl",
      pic: Dbbl,
      cat: "deposit",
    },
    {
      name: "Visa",
      pic: visa,
      cat: "deposit",
    },
    {
      name: "Master",
      pic: master,
      cat: "deposit",
    },
  ];
  return (
    <div className="billing-container">
      <h4>Billing And Payments</h4>
      <h4>Widtraw Address</h4>
      <div className="biling-method-container">
        {withdrawArray.map((val, ind) => {
          return (
            <Billing val={val} key={ind} setBillingData={setBillingData} />
          );
        })}
      </div>
      <h4>Deposit Address</h4>
      <div className="biling-method-container">
        {depositArray.map((val, ind) => {
          return (
            <Billing val={val} key={ind} setBillingData={setBillingData} />
          );
        })}
      </div>
    </div>
  );
};

export default BillingandPayments;
