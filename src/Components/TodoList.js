import React , {useContext} from 'react';
import { TodoContext } from './App';
import Todo from './Todo';

export default function TodoList({tasks}) {
    const {handleAddTask} = useContext(TodoContext)
  return (
      <>
        <div className='todo-list-container'>
          <h2 className='tasks-heading'>TO-DO :</h2>
          {tasks.map(task => 
          <Todo 
          key={task.id} 
          task={task}
          />
          )}
          <div className='addtask-btn-container'>
            <button 
            className='btn btn--primary'
            onClick={() => handleAddTask()}
            >
                Add Task
            </button>
          </div>
        </div>
    </>
    
  );
}
