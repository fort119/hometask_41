import { useState } from 'react';
import './App.css';


function App() {

  const [todoTasks, settodoTasks] = useState([]);
  const [input, setInput] = useState("");


  const addTask = function(e){
    e.preventDefault();
    if(input && input !== "" && input !== " ")
    settodoTasks(todoTasks.concat([{title: input, id: (Math.random()*100).toFixed(), done: false,}]))
  }


  function statusHandler(id){
    settodoTasks(todoTasks.filter(task => {
      if(task.id===id){
        task.done = !task.done
      }
      return task;
    }))


  }
  return (
    <div className="App">
      <div className='todo-app'>
        <h1 className='todo-heading'>Todo list</h1>

        {todoTasks.map((task)=> {
          return (
            <div className='tasks-list' key={task.id}>
              <h2 className='task-title'>To:</h2>
            <p className='task-descr' onClick={()=>statusHandler(task.id)} style = {{textDecoration: task.done? 'line-through': null}}>{task.title}</p>
          </div>
          );
        })}

        < form className='todo-form' onSubmit={addTask}>
          <input type='text' value = {input} className='task-input' placeholder='enter your task' onChange={
            function(e){
              setInput(e.target.value)
            }
          }></input>
          <button type='button' className='add-task-btn' onClick={addTask}>Add task</button>
        </form>

      </div>
    </div>
  );
}

export default App;
