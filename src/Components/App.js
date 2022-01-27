import React , {useState , useEffect } from 'react';
import '../css/App.css'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList';
import TodoEdit from './TodoEdit';
export const TodoContext = React.createContext()

function App() {
  const [ tasks , setTasks ] = useState(smapletasks)
  const LOCAL_STORAGE_KEY = 'TO-DO APP'
  const [selectedtaskid , setselectedtaskid] = useState()
  const selectedtask = tasks.find(task => task.id === selectedtaskid)

  useEffect(() => {
    const tasksjson = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(tasksjson != null ) setTasks(JSON.parse(tasksjson))
  },[])

  useEffect( ()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(tasks))
  },[tasks])

  const todocontextvalue = {
    handleAddTask,
    handleRemoveTask,
    handleEditTask,
    handleSelectedTask,
    handleTaskChange
  }
  function handleAddTask(){
    const NewTask = {
      id : uuidv4(),
      name : '',
      time : '',
      description : ''
    }
    setTasks([...tasks,NewTask])
  }
  function handleRemoveTask(id){
    setTasks(tasks.filter(task => task.id !== id))
  }
  function handleEditTask(id){
    setselectedtaskid(id)
  }
  function handleSelectedTask(id){
    setselectedtaskid(id)
  }
  function handleTaskChange(id,newtask){
    const NewTasks = [...tasks]
    const Index = tasks.findIndex(r => r.id===id)
    NewTasks[Index]=newtask
    setTasks(NewTasks)
  }
  return (
    <TodoContext.Provider value={todocontextvalue}>
      <h1 className='heading'>TO - DO LIST</h1>
      <TodoList tasks={tasks}/>
      { selectedtask && <TodoEdit task = {selectedtask}/>}
    </TodoContext.Provider>
  )
}
const smapletasks = [
  {
    id : uuidv4(),
    name : 'Wake up',
    time : '5:30 am',
    description : 'Wake up and go for a walk in the morning'
  },
  {
    id : uuidv4(),
    name : 'Eat',
    time : '8:00 am',
    description : 'Eat Breakfast'
  }
]

export default App;
