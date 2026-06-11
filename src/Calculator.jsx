import React from "react";
import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "c",
  ];

  const [button, setButton] = useState(number);
  const [inputvalue, setInputValue] = useState("");

  function handlcalc(btnValue) {
    if (btnValue === "c") {
      setInputValue("");
    } else if (btnValue === "=") {
      const res = eval(inputvalue);
      setInputValue(res);
    } else {
      setInputValue(inputvalue + btnValue);
    }
  }

  return (
    <>
      {/* {card2.map((card) => (
        <li>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <button>item</button>
        </li>
      ))} */}
      <input type="text" value={inputvalue} readOnly />
      <div className="container">
        {button.map((btn, index) => (
          <button key={index} onClick={() => handlcalc(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default Calculator;
