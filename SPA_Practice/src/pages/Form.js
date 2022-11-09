import {
    useNavigate, useLocation
  } from "react-router-dom";
  import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
  import { useState, useRef, useEffect } from 'react';
  import './Form.css';

function Form (){
  const location = useLocation();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  let nameInput = location.state.name;
  let emailInput = location.state.email;
  let ageInput = location.state.age;

  const checkEmailFormat = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) || mail == '') {
      setShowError(false);
    }
    else{
      setShowError(true);
      setErrorMessage('Email format is incorrect');
    }
    console.log('Input is:', mail);
  };
  const checkAge = (age) =>{
    if (age > 120 || /^\w+([\+\-\*/])+$/.test(age)){
      setShowError(true);
      setErrorMessage('Age is incorrect');
    }
    else{
      setShowError(false);
    }
  }
  return(
    <div className="Form">
      <div className="Form-container">
      <div>
        Apply Form
      </div>
      {showError && (<div className="errorMessageClass">{errorMessage}</div>)}

      <input id="name" defaultValue={nameInput}/>
      <input id="email" onChange={e => checkEmailFormat(e.target.value)} defaultValue={emailInput}/>
      <input id="age" type='number' onChange={e => checkAge(e.target.value)} defaultValue={ageInput}/>

      <button onClick={()=>{navigate(-1, {state:{name:nameInput, email:emailInput, age:ageInput, time:new Date().getTime()}});}}>
        Submit
      </button>
      </div>
    </div>

  )
}
export default Form;