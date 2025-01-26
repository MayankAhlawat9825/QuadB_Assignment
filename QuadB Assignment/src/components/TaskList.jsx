import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../Styles/TaskList.css';

const TaskList = ({ isGridView, onTaskClick }) => {
  const tasks = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.todos.filter);
  const searchQuery = useSelector((state) => state.todos.searchQuery);

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = (() => {
      switch (filter) {
        case 'TODAY':
          return task.dueDate === new Date().toISOString().split('T')[0];
        case 'IMPORTANT':
          return task.important;
        case 'PLANNED':
          return task.planned;
        case 'ASSIGNED':
          return task.assignedTo === 'me'; // Adjust this condition as needed
        case 'ALL':
        default:
          return true;
      }
    })();

    const matchesSearchQuery = task.task.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearchQuery;
  });

  return (
    <div className={`task-list ${isGridView ? 'grid-view' : 'list-view'}`}>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onClick={onTaskClick} />
        ))
      ) : (
        <div className="no-tasks">No tasks found</div>
      )}
    </div>
  );
};

export default TaskList;
