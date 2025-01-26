import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, toggleTaskImportance } from '../redux/slices/todoSlice';
import '../Styles/TaskItem.css';

const TaskItem = ({ task, onClick }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleToggleImportance = () => {
    dispatch(toggleTaskImportance(task.id));
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} onClick={() => onClick(task)}>
      <input type="checkbox" checked={task.completed} onChange={handleToggleCompletion} />
      <span>{task.task}</span>
      <i className={`fas fa-star ${task.important ? 'important' : ''}`} onClick={handleToggleImportance}></i>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
