import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio. Lo que hacemos aca es crear una instancia de la clase creada en greeting.jsx */}
        <Greeting name="Axel"></Greeting>
        {/* Pasamos la prop name */}
        <GreetingF name="Ezequiel"></GreetingF>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
