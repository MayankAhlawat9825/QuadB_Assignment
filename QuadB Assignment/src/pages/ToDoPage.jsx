import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import TaskSidebar from '../components/TaskSidebar';
import WeatherInfo from '../components/WeatherInfo';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../Styles/ToDoPage.css';

const ToDoPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [isGridView, setIsGridView] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError('Failed to get user location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseTaskSidebar = () => {
    setSelectedTask(null);
  };

  if (!isAuthenticated) {
    return <div>Please log in to view your tasks.</div>;
  }

  return (
    <div className={`todo-page ${selectedTask ? 'task-sidebar-open' : ''}`}>
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
        toggleView={toggleView}
        isGridView={isGridView}
      />
      <div className="content">
        {isSidebarVisible && <Sidebar />}
        <div className="main-content">
          <h2 style={{fontWeight:"1000"}}>To-Do List</h2>
          <TaskInput />
          <TaskList isGridView={isGridView} onTaskClick={handleTaskClick} />
          {location.latitude && location.longitude ? (
            <WeatherInfo latitude={location.latitude} longitude={location.longitude} />
          ) : (
            <div>{error || 'Loading location...'}</div>
          )}
        </div>
        {selectedTask && <TaskSidebar task={selectedTask} onClose={handleCloseTaskSidebar} />}
      </div>
    </div>
  );
};

export default ToDoPage;
