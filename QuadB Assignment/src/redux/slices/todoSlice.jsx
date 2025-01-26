import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    filter: 'ALL',
    searchQuery: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        task: action.payload.task,
        reminder: action.payload.reminder,
        repeat: action.payload.repeat,
        dueDate: action.payload.dueDate,
        priority: action.payload.priority,
        completed: false,
        important: false,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    toggleTaskImportance: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.important = !task.important;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, toggleTaskImportance, setFilter, setSearchQuery } = todosSlice.actions;
export default todosSlice.reducer;
