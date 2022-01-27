import React ,{ useContext } from 'react';
import { TodoContext } from './App';

export default function TodoEdit({task}) {
  const {handleSelectedTask} = useContext(TodoContext)
  return (
      <div className='edit-wrapper'>
        <div className='closebtn-container'>
          <button 
          className='btn close-btn'
          onClick={() => handleSelectedTask(undefined)}
          >
              &times;
          </button>
        </div>
        <h2 className='edit-heading'>EDIT TASK</h2>
        <div className='edit-container'>
          <label className='edit-label' htmlFor='task'>Task</label>
          <input 
          className='edit-input' 
          type='text' 
          name='task' 
          id='task' 
          value={task.name}
          />
          <label className='edit-label'  htmlFor='time'>Time</label>
          <input 
          className='edit-input' 
          type='text' 
          name='time' 
          id='time' 
          value={task.time}
          />
          <label className='edit-label'  htmlFor='description'>Description</label>
          <textarea 
          className='edit-textarea' 
          type='text' 
          name='description' 
          id='description' 
          value={task.description}
          />
        </div>
        <div className='done-btn-container'>
        <button 
        className='btn btn--danger'
        onClick={() => handleSelectedTask(undefined)}
        >
          DONE
        </button>
        </div>
      </div>
  );
}
