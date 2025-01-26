import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todoSlice';
import apiDataReducer from './slices/apiDataSlice';
import authReducer from './slices/authSlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    apiData: apiDataReducer,
    auth: authReducer,
    weather: weatherReducer,
  },
});

export default store;
