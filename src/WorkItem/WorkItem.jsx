import React, { useState } from 'react';
import './WorkItem.css'

const WorkItem = ({ workText, onDelete, onEdit }) => {

  const [isDone, setIsDone] = useState(false);

  const handleDoneClick = () => {
    setIsDone(!isDone);
  };

  return (
            <div className={`todo-item ${isDone ? 'done' : ''}`}>
              <div className={`todo-txt ${isDone ? 'line-through' : ''}`}>
                {workText}
              </div>
              <div className='item-btn-div'>
                <button className='btn sub-btn' onClick={onDelete}>
                  Delete
                </button>
                <button className={`btn sub-btn ${isDone ? 'd-none' : ''}`} onClick={onEdit}>
                  Edit
                </button>
                <button className='btn sub-btn' onClick={handleDoneClick}>
                  Done
                </button>
              </div>
            </div>        
  );
};

export default WorkItem;
