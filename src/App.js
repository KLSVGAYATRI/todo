import React, {useState} from 'react';
import Todolist from './Todolist';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
   const newTodos = [...todos, task];
   setTodos(newTodos);
   setTask("");
   console.log(newTodos);
  }
  const deleteHandler = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }
  const editHandler = (index, newTask) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return newTask;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>Todo Management Application</h1>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler} placeholder="Enter your task here" /> &nbsp;&nbsp;
              <button type="submit">Add Task</button>
            </form>
            <Todolist todolist={todos} deleteHandler={deleteHandler} editHandler={editHandler} />
          </div>  
                </div>

      </center>
      </div>
  );
}
export default App;
