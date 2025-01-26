import React, { useState } from 'react';
import '../Styles/TaskSidebar.css';

const TaskSidebar = ({ task, onClose }) => {
  const [reminder, setReminder] = useState(task.reminder || '');
  const [repeat, setRepeat] = useState(task.repeat || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');
  const [notes, setNotes] = useState(task.notes || '');

  const handleSave = () => {
    // Save the updated task details
    // You can dispatch an action to update the task in the Redux store
    onClose();
  };

  return (
    <div className="task-sidebar">
      <h3>{task.task}</h3>
      <div className="task-sidebar-content">
        <label>
          <i className="fas fa-bell" title="Set reminder"></i>
          <input type="text" value={reminder} onChange={(e) => setReminder(e.target.value)} placeholder="Set reminder" />
        </label>
        <label>
          <i className="fas fa-redo" title="Repeat"></i>
          <input type="text" value={repeat} onChange={(e) => setRepeat(e.target.value)} placeholder="Repeat" />
        </label>
        <label>
          <i className="fas fa-calendar-alt" title="Due date"></i>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <label>
          <i className="fas fa-sticky-note" title="Add notes"></i>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add notes"></textarea>
        </label>
        <div className="bottom-btn">
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={onClose} className="close-button">Close</button>
        </div>

      </div>
    </div>
  );
};

export default TaskSidebar;
