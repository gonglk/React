import React from "react";
import { useState, useEffect, useRef } from "react";

function BtoD() {
    const ref = useRef(null);
    const [decimal, setDecimal] = useState(0);

    const handleOnChange =(binaryVal)=>{
        if (binaryVal.length>8){
            alert(`Your input length is ${binaryVal.length}, which is over 8`);
            ref.current.value='';
            setDecimal(0);
            return;
        }
        console.log(typeof(binaryVal));
        setDecimal(parseInt(binaryVal, 2)); 
    }

    const preventOtherInput = (e)=>{
        if (!/[0-1]/.test(e.key)) {e.preventDefault();}
    }

    return(
        <div className="container">
            <input ref={ref} className="binaryInput" onChange={(e) => handleOnChange(e.target.value)} onKeyPress={(e) => preventOtherInput(e)}/>
            <div className="decimalOutput">{decimal}</div>
        </div>
    )
}


export default BtoD;