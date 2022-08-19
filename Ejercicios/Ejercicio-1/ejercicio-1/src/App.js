import './App.css';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        
      </header>
    </div>
  );
}

export default App;
