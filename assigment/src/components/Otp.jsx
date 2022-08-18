import axios from "axios";
import React from "react";
import { useState } from "react";

export const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState();

  const handler = (e) => {
    e.preventDefault();

    //     console.log(phone);
    axios
      .post(
        "http://fintech-backend-staging.easyaspataal.com/api/phone_numbers/verify_otp",
        { phoneNumber, otp }
      )
      .then((e) => {
        alert("sussecc fully");
      });
  };

  return (
    <div
      style={{
        height: "10rem",
        width: "30rem",
        left: "30rem",
        top: "33rem",
        border: "2px solid black",
        background: "teal",
        marginTop: "10rem",
        marginLeft: "20rem",
      }}
    >
      <form
        style={{
          padding: "50px",
        }}
        onSubmit={handler}
      >
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          type="number"
          placeholder="enter your number"
          id="number "
        />
        <input
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          type="number"
          placeholder="enter your otp"
          id="otp"
        />
        <button>enter</button>
      </form>
    </div>
  );
};
