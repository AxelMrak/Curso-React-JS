import './App.css';
import TaskListComponent from '../src/components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        <GreetingStyled name='Martin'></GreetingStyled>
      </header>
    </div>
  );
}

export default App;