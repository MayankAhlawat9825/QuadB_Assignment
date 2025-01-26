import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './pages/LoginPage';
import ToDoPage from './pages/ToDoPage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/todo" element={<ToDoPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
