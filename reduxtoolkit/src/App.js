import './App.css';
import Todos from './Components/Todos';
// Update import statements
import AddTodos from './Components/addTodos';

function App() {
  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
