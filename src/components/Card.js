import React, { useState } from "react";
import "./Card.css";

function Card({ title, subHeading, service1, service2, service3 }) {
  const [btnText, setbtnTxt] = useState("Follow");
  const [divText, setdivTxt] = useState(subHeading);

  const changeTxt = (btnText) => {
    setbtnTxt(btnText);
  };
  const updateTxt = (divText) => {
    setdivTxt(divText);
  };
  return (
    <div className="card-container">
      <div className="upper-container">
        <img
          src="https://img.freepik.com/free-vector/flying-rocket-background_1270-85.jpg?w=740&t=st=1665823667~exp=1665824267~hmac=2304bd61c03d8f8f985c9a6bfcbcebd2979fb9169c9a803f9ff6f423e7bb36cc"
          width="100px"
          height="90px"
        />
        <button

          className="followbtn"
          onClick={() => {
            setbtnTxt("Following");
            setTimeout(() => {
              setbtnTxt("Follow");
              setdivTxt(divText);
            }, 1800);
            updateTxt(
              "Providing  good solutions to the buisness for the future"
            );
          }}
        >
          {btnText}
        </button>
      </div>
      <div className="lower-container">
        <div className="content">
          <h2>{title}</h2>
          <p>{divText}</p>
          <div className="service">
            <p className="service-column">{service1}</p>
            <p className="service-column">{service2}</p>
            <p className="service-column">{service3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
