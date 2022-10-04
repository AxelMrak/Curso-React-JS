import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AsyncExample from './components/pure/AsyncExample';
// import TaskListComponent from '../src/components/container/task_list';
// import Father from './components/container/father';
// import OptionalRender from './components/pure/optionalRender';
import Loginformik from './components/pure/forms/loginFormik';
import TaskFormik from './components/pure/forms/taskFormik';
import ObservableExample from './components/pure/ObservableExample';
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
      {/* <OptionalRender></OptionalRender> */}
      {/* Ejemplos de uso de FORMIK */}
      {/* Ejemplos de Asincronía */}
      <AsyncExample></AsyncExample>
      <ObservableExample></ObservableExample>
      {/* <TaskFormik></TaskFormik> */}
    </div>
  );
}

export default App;