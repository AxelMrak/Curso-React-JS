import logo from './logo.svg';
import './App.css';
import Contact2 from './components/contact2';
import ContactComponent from './components/contactComponent';


function App() {

  const contactDefault = {
    name: `Marco`,
    surname: `Polo`,
    email: `marcopolo@world.com`,
    online: false,
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactComponent Contact={contactDefault} ></ContactComponent>
      </header>
    </div>
  );
}

export default App;

/**
 * !Error mio: Aca se coloca el objeto que sera el que por default muestra el renderizado. Este contacto se pasara como argumento a la funcion contactcomponent como lo hemos decidido antes.
 */