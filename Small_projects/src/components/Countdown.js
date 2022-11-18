import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useEffect, useState } from "react";
import './Countdown.css';

function Timer(){
    const [dayLast, setdayLast] = useState(0);
    const [hourLast, sethourLast] = useState(0);
    const [minLast, setminLast] = useState(0);
    const [secLast, setsecLast] = useState(0);
    const [resume, setresume] = useState(false);
    const [difference, setdifference] = useState(0);
    let interval;
    const handleOnChange = (v) =>{
        const cur = new Date().getTime();
        const target = Date.parse(v);
        setdifference(target - cur);

        setdayLast( Math.floor(difference / (1000*60*60*24)));
        sethourLast(Math.floor(difference / (1000*60*60)) % 24);
        setminLast(Math.floor(difference / (1000*60)) % 60);
        setsecLast(Math.floor(difference / (1000)) % 60);
        console.log(difference);
        // dayLast = difference / (1000*60*60*24);
        // hourLast = difference / (1000*60*60) % 24;
        // minLast = difference / (1000*60) % 60;
        // secLast = difference / 1000 % 60;
        
    }
    
    useEffect(()=>{
        if(resume){
            interval = setInterval(()=>{
                console.log(difference);
                if (difference >= 0){
                    setdifference(prevTime => prevTime - 1000);
                    setdayLast( Math.floor(difference / (1000*60*60*24)));
                    sethourLast( Math.floor(difference / (1000*60*60)) % 24);
                    setminLast( Math.floor(difference / (1000*60)) % 60);
                    setsecLast( Math.floor(difference / (1000)) % 60);
                }
                console.log('go');   
            }, 1000)
        } else {
            console.log('1111');
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[difference, resume])


    return(
        <div className="container">
            <input type="datetime-local" onChange={(e) => handleOnChange(e.target.value)}/>
            <div className="countContainer">
                <div className="item">
                    <span>{dayLast}<p>days</p></span>
                    
                </div>
                <div className="item">
                    <span>{hourLast}<p>hours</p></span>
                    
                </div>
                <div className="item">
                    <span>{minLast}<p>minutes</p></span>
                   
                </div>
                <div className="item">
                    <span>{secLast}<p>seconds</p></span>
                    
                </div>
            </div>
            <button onClick={()=>{setresume(true);}}>Start</button>
            <button onClick={()=>{setresume(false);}}>Stop</button>
        </div>
    )
}

export default Timer;