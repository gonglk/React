
import './App.css';
import Clock from './components/Clock';
import BtoD from './components/BtoD';
import Timer from './components/Countdown';
function App() {
  return (
    <div className="App">
      <Clock/>
      <BtoD/>
      <Timer/>
    </div>
  );
}

export default App;
