import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import TasksPage from './Pages/TasksPage'


function App() {

  const logged = localStorage.getItem('Users', 'Pass')


  return (
    <Router>
      <Switch>
        <Route path='/register' component={RegisterPage}>
        </Route>
        <Route path='/login' component={LoginPage}>
        </Route>
        <Route path='/tasks' component={TasksPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
