import './App.css';
import ClockFunctional from './component/ClockFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockFunctional nombre={"Axel"} apellidos={"Maxwell-Bou"}></ClockFunctional>
      </header>
    </div>
  );
}

export default App;
