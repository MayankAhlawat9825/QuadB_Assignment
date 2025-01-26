import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/todoSlice';
import '../Styles/Sidebar.css';
import PieChart from './PieChart';

const Sidebar = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    dispatch(setFilter(filter));
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="src/Images/Profile.jpg" alt="Profile" />
        <p>Hey, ABCD</p>
      </div>
      <div className="sidebar-content-info">
        <ul>
          <li
            className={selectedFilter === 'ALL' ? 'active' : ''}
            onClick={() => handleFilter('ALL')}
          >
            All Tasks
          </li>
          <li
            className={selectedFilter === 'TODAY' ? 'active' : ''}
            onClick={() => handleFilter('TODAY')}
          >
            Today
          </li>
          <li
            className={selectedFilter === 'IMPORTANT' ? 'active' : ''}
            onClick={() => handleFilter('IMPORTANT')}
          >
            Important
          </li>
          <li
            className={selectedFilter === 'PLANNED' ? 'active' : ''}
            onClick={() => handleFilter('PLANNED')}
          >
            Planned
          </li>
          <li
            className={selectedFilter === 'ASSIGNED' ? 'active' : ''}
            onClick={() => handleFilter('ASSIGNED')}
          >
            Assigned to me
          </li>
          <li
            className={selectedFilter === 'ADD_LIST' ? 'active' : ''}
            onClick={() => handleFilter('ADD_LIST')}
          >
            Add list
          </li>
        </ul>
      </div>
      <div className="pie-chart">
        <PieChart />
      </div>
    </div>
  );
};

export default Sidebar;
