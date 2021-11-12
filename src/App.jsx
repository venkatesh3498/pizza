import React from 'react';

import './App.css';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/auth/Register';
import { Sidebar } from './components/sidebar/Sidebar';
import Settings from './pages/settings/Settings';
import Orders from './pages/orders/Orders';
function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
