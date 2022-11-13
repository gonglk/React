import './Clock.css'
import React from 'react';
import { useState, useEffect } from 'react';

function Clock() {
    useEffect(()=>{
        const interval = setInterval(() => {
            let hourStick = document.querySelector('#hour');
            let minuteStick = document.querySelector('#minute');
            let secondStick = document.querySelector('#second');

            let day = new Date();
            let hourDegree = day.getHours() * 30;
            let minuteDegree = day.getMinutes() * 6;
            let secondDegree = day.getSeconds() * 6;

            hourStick.style.transform = `rotateZ(${hourDegree+(minuteDegree/12)}deg)`;
            minuteStick.style.transform = `rotateZ(${minuteDegree}deg)`;
            secondStick.style.transform = `rotateZ(${secondDegree}deg)`;
          }, 1000);    
    },[])
    

    return (
      <div className="Clock">
        <div className='circle' id='second'><div className='secondStick'></div></div>
        <div className='circle circleMinute' id='minute'><div className='minuteStick'></div></div>
        <div className='circle circleHour' id='hour'><div className='hourStick'></div></div>


        <span style={{'--i':1}}><p>1</p></span>
        <span style={{'--i':2}}><p>2</p></span>
        <span style={{'--i':3}}><p>3</p></span>
        <span style={{'--i':4}}><p>4</p></span>
        <span style={{'--i':5}}><p>5</p></span>
        <span style={{'--i':6}}><p>6</p></span>
        <span style={{'--i':7}}><p>7</p></span>
        <span style={{'--i':8}}><p>8</p></span>
        <span style={{'--i':9}}><p>9</p></span>
        <span style={{'--i':10}}><p>10</p></span>
        <span style={{'--i':11}}><p>11</p></span>
        <span style={{'--i':12}}><p>12</p></span>
      </div>
    );
  }
  
  export default Clock;