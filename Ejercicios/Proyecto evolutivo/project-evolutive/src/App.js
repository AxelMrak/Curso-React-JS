import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TaskListComponent from '../src/components/container/task_list';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
// import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Estilo aplicado a usuarios logeados o no */}
        {/* <GreetingStyled name='Martin'></GreetingStyled> */}
        {/* GESTION DE EVENTOS */}
        {/* <Father></Father> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de renderizado condicional */}
        <OptionalRender></OptionalRender>
    </div>
  );
}

export default App;