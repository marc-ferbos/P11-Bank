import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import store from './Utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
