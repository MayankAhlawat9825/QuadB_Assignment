import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/todoSlice';
import '../Styles/TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [reminder, setReminder] = useState('');
  const [repeat, setRepeat] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showReminderInput, setShowReminderInput] = useState(false);
  const [showRepeatInput, setShowRepeatInput] = useState(false);
  const [showDueDateInput, setShowDueDateInput] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ task, reminder, repeat, dueDate, priority: 'Medium' }));
      setTask('');
      setReminder('');
      setRepeat('');
      setDueDate('');
      setShowReminderInput(false);
      setShowRepeatInput(false);
      setShowDueDateInput(false);
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <div className="task-input-icons">
        <i className="fas fa-bell" title="Set reminder" onClick={() => setShowReminderInput(!showReminderInput)}></i>
        <i className="fas fa-redo" title="Repeat" onClick={() => setShowRepeatInput(!showRepeatInput)}></i>
        <i className="fas fa-calendar-alt" title="Due date" onClick={() => setShowDueDateInput(!showDueDateInput)}></i>
      </div>
      {showReminderInput && (
        <input
          type="text"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          placeholder="Set reminder"
        />
      )}
      {showRepeatInput && (
        <input
          type="text"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          placeholder="Set repeat"
        />
      )}
      {showDueDateInput && (
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      )}
      <button onClick={handleAddTask}>ADD TASK</button>
    </div>
  );
};

export default TaskInput;
