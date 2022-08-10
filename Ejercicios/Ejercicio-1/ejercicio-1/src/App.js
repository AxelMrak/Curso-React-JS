import './App.css';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio. Lo que hacemos aca es crear una instancia de la clase creada en greeting.jsx */}
        {/* <Greeting name="Axel"></Greeting> */}
        {/* Pasamos la prop name */}
        {/* Componente propio. Pero es tipo funcional */}
        {/* <GreetingF name="Ezequiel"></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/* Componente de listado de tareas */}
      </header>
    </div>
  );
}

export default App;
