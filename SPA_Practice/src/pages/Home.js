
import './Home.css';
import {
  Link, useNavigate, useLocation
} from "react-router-dom";
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Navigation } from 'react-router';
import { useState,useRef, useEffect } from 'react';


const duration = 300;
const data = [
  {name:'Bobby', email:'abc@abc.com', age:'10', time:'2022-05-01 10:20:10'},
  {name:'Joe', email:'xyz@abc.com', age:'20', time:'2022-05-01 10:21:30'}
]

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showList, setShowList] = useState(false)

  const [inputName, setInputName] = useState('')
  

  const inputHandleChange = event => {
    setInputName(event.target.value);

    console.log('Input is:', event.target.value);
  };

  const nodeRef = useRef(null);
  return (
    <div className="App">
      <header className="App-header">
      {showMessage && (<div className='inputTitle'>Input your name</div>)}
      <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={duration} unmountOnExit
        onEnter={()=>setShowButton(false)}
        >
          <input className='userNameInput' type="text" name="name" onChange={inputHandleChange}/>
        </CSSTransition>
        
      {showButton && (<button className='entryButton' onClick={()=>setShowMessage(true)}>What is your name?</button>)}
      {showMessage && (<button className='entryButton' onClick={()=>{setShowList(true); setShowMessage(false)}}>Submit</button>)}

      {showList && (<div className='welcomeHeader'>
        <div>Welcome</div>
        <div>{inputName}</div>
        
        
        <button className='entryButton' onClick={()=>{setShowList(true); setShowMessage(false); navigate("/form", {state:{name:inputName, email:'', age:''}})}}>Apply</button>
        
      </div>)}

      {showList && (<div>
        <div>
          Apply list
        </div>
        <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Create Time</th>
            <th>Action</th>
          </tr>
          {data.map((val, key) =>{
            return(
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.age}</td>
                <td>{val.time}</td>
                <td>
                  
                  <button onClick={()=>{navigate("/form", {state:{name:val.name, email:val.email, age:val.age}})}}>Modify</button>
                  <button>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        </table>
        
      </div>

      )}

      </header>
    </div>
  );
}

export default Home;

