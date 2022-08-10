import logo from './logo.svg';
import './App.css';
import Contact2 from './components/contact2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact2 ></Contact2>
      </header>
    </div>
  );
}

export default App;
