import React from "react";
import { useEffect, useState } from "react";
import './Countdown.css';

function Timer(){
    let dayLast = 0;
    let hourLast = 0;
    let minLast = 0;
    let secLast = 0;
    const handleOnChange = (v) =>{

    }

    return(
        <div className="container">
            <input type="datetime-local" onChange={(e) => handleOnChange(e.target.value)}/>
            <div className="countContainer">
                <div className="item">
                    <span>{dayLast}</span>
                </div>
                <div className="item">
                    <span>{hourLast}</span>
                </div>
                <div className="item">
                    <span>{minLast}</span>
                </div>
                <div className="item">
                    <span>{secLast}</span>
                </div>
            </div>
        </div>
    )
}

export default Timer;