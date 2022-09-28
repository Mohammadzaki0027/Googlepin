import { forwardRef } from "react";
import React from "react";

const PinInput = forwardRef(({ Singlechange,backSpaceKey }, ref) => {

    const keychecker=(e)=>{
    if(e.keyCode===8){
        backSpaceKey(e)
    }
    else {
        Singlechange(e)
    }
    }
  return (
    <input
      maxLength={1}
      // ref={(element) => {
      //   inputref.current[index] = element;
      // }}
onKeyUp={keychecker}
      ref={ref}
    //   onChange={(e) => Singlechange(e)}
    />
  );
});

export default PinInput;
