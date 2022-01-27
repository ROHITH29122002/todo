import React , {useState } from 'react';
import '../css/App.css'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList';
export const TodoContext = React.createContext()

function App() {
  const [ tasks , setTasks ] = useState(smapletasks)
  
  const todocontextvalue = {
    handleAddTask,
    handleRemoveTask
  }
  function handleAddTask(){
    const NewTask = {
      id : uuidv4(),
      name : 'new task',
      time : 'new time ',
      description : 'description'
    }
    setTasks([...tasks,NewTask])
  }
  function handleRemoveTask(id){
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <TodoContext.Provider value={todocontextvalue}>
      <h1 className='heading'>TO - DO LIST</h1>
      <TodoList tasks={tasks}/>
    </TodoContext.Provider>
  )
}
const smapletasks = [
  {
    id : uuidv4(),
    name : 'Walk',
    time : '5:30 am',
    description : 'Walk in the morning'
  },
  {
    id : uuidv4(),
    name : 'Eat',
    time : '8:00 am',
    description : 'Eat Breakfast'
  }
]

export default App;
