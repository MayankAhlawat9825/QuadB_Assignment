import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Styles/PieChart.css';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const tasks = useSelector((state) => state.todos.tasks);

  const completedTasks = tasks.filter(task => task.completed).length;
  const incompleteTasks = tasks.length - completedTasks;

  const data = useMemo(() => ({
    labels: ['Completed', 'Incomplete'],
    datasets: [
      {
        data: [completedTasks, incompleteTasks],
        backgroundColor: ['#4CAF50', '#f44336'],
      },
    ],
  }), [completedTasks, incompleteTasks]);

  return (
    <div className="pie-chart">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
