import React , {useContext} from 'react';
import { TodoContext } from './App';

export default function Todo({task}) {
  const {handleRemoveTask,handleEditTask} = useContext(TodoContext)
  return (
    <div className='todo-container'>
        <div className="todo-details-container">
            <span className='todo-label'>Task :</span>
            <span className='todo-value'>{task.name}</span>
            <span className='todo-label'>Time :</span>
            <span className='todo-value'>{task.time}</span>
            <span className='todo-label'>Description :</span>
            <p className='todo-value'>{task.description}</p>
        </div>
        <div className="task-edit-btn-container">
            <button 
            className='task-edit-btn btn btn--primary'
            onClick={() => handleEditTask(task.id)}
            >
              Edit
            </button>
            <button 
            className='task-remove-btn btn btn--danger'
            onClick={() => handleRemoveTask(task.id)}
            >
              Remove
            </button>
        </div>
    </div>
  );
}
