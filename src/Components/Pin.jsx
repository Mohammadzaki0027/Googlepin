import React from "react";
import propTypes from "prop-types";
import { useRef, useState } from "react";
import styles from "../App.css";
import PinInput from "./PinInput";
const Pin = ({ length, setPinnumber }) => {
  const [lengthofarray] = React.useState(new Array(length).fill(1));
  const inputref = useRef([]);
  const [inputData] = React.useState(new Array(length).fill(""));

  const Backspacehandle = (e, index) => {
    if (index != 0) {
      inputref.current[index - 1].focus();
    }
    inputData[index] = e.target.value;
    setPinnumber(inputData.join(""));
  };
  React.useEffect(() => {}, []);

  const handlechange = (e, index) => {
    inputData[index] = e.target.value;

    if (index < length - 1 && e.target.value.length > 0) {
      inputref.current[index + 1].focus();
    }
    setPinnumber(inputData.join(""));
  };
//copy paste function 
  const handlepaste = (e) => {
    const pasteddata = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < length);
      pasteddata.forEach((e,index)=>{
        inputData[index]=e
      inputref.current[index].value=e
      if(index<length-1)
      {
        inputref.current[index+1].focus()
      }
      }
  
      )
  };
  return (
    <div className="pincom" onPaste={handlepaste}>
      {lengthofarray.map((_, index) => (
        <PinInput
          key={index}
          Singlechange={(e) => handlechange(e, index)}
          backSpaceKey={(e) => Backspacehandle(e, index)}
          ref={(element) => {
            inputref.current[index] = element;
          }}
        ></PinInput>
      ))}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: propTypes.number.isRequired,
  //     length:propTypes.number
  setPinnumber: propTypes.func,
};
