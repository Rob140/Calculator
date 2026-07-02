import { useState } from "react";
import styles from "./Calculator.module.css";

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

  // const [button, setButton] = useState(number);
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

  // const getButtonClass = (btn) => {
  //   if (btn === "=") return styles.equals;
  //   if (btn === "c") return styles.clear;
  //   if (["+", "-", "*", "/"].includes(btn)) return styles.operator;
  //   return "";
  // };

  return (
    <>
      <input
        type="text"
        value={inputvalue}
        readOnly
        className={styles.display}
      />
      <div className={styles.container}>
        {number.map((btn, index) => (
          <button
            key={index}
            onClick={() => handlcalc(btn)}
            className={styles.button}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default Calculator;
