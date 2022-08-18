import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const handler = (event) => {
    event.preventDefault();

    //     console.log(phone);
    axios
      .post(
        "http://fintech-backend-staging.easyaspataal.com/api/phone_numbers/send_otp",
        { phoneNumber }
      )
      .then((e) => {
        console.log(e);
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
          id="phone"
        />
        <Link to="/otp">enter</Link>
      </form>
    </div>
  );
};
