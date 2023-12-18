import logo from "./logo.svg";
import "./App.css";
// import "./components/Bootstrap/Style.css";
import TaskList from "./components/ToDoList/TaskList";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';


library.add(fas);


function App() {
  return <TaskList />;
}

export default App;
