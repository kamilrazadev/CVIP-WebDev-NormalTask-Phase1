import React, {useState} from 'react'
import './AddWorkField.css'
import WorkItem from '../WorkItem/WorkItem';
import { deleteModel } from 'mongoose';

export default function AddWorkField() {

  const [inputValue, setInputValue] = useState('');
  const [workList, setWorkList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddWork = () => {
    if (inputValue.trim() !== '') {
      setWorkList([...workList, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteWork = (index) => {
    const updatedWorkList = [...workList];
    updatedWorkList.splice(index, 1);
    setWorkList(updatedWorkList);
  }

  
  const handleEditWork = (index) => {
    const updatedText = prompt('Edit Work:', workList[index]);
    if (updatedText !== null && updatedText !== '') {
      const updatedWorkList = [...workList];
      updatedWorkList[index] = updatedText;
      setWorkList(updatedWorkList);
    }
  };


  return (
    <>
        <div className='todo-container'>
            <div className='add-work-container'>
              <input type="text" value={inputValue} onChange={handleInputChange} className='text-field' />
              <div className='btn-div'>
                <button className='btn' onClick={handleAddWork}>
                  Add work
                </button>
              </div>
            </div>
            <div className='added-todo-container'>
              {workList.map((work, index) => (
                <WorkItem key={index} workText={work} onDelete={() => handleDeleteWork(index)} onEdit={() => handleEditWork(index)} />
              ))}
            </div>
        </div>
        
    </>
  )
}
