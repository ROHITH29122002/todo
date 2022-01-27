import React from 'react';

export default function Todo({task}) {
  return (
    <div className='todo-container'>
        <div className="todo-details-container">
            <span className='todo-label'>Task</span>
            <span className='todo-value'>{task.name}</span>
            <span className='todo-label'>Time</span>
            <span className='todo-value'>{task.time}</span>
            <span className='todo-label'>Description</span>
            <p className='todo-value'>{task.description}</p>
        </div>
        <div className="task-edit-btn-container">
            <button className='task-edit-btn btn btn--primary'>Edit</button>
            <button className='task-remove-btn btn btn--danger'>Remove</button>
        </div>
    </div>
  );
}
