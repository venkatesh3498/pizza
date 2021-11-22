import React from 'react';
// import { Items } from './Data';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import { Routes, Route} from "react-router-dom";
import Register from './pages/auth/Register';
import { Sidebar } from './components/sidebar/Sidebar';
import Settings from './pages/settings/Settings';
import Orders from './pages/orders/Orders';
// import { addItems } from './actions/cartActions';
class App extends React.Component{
  render(){
    const path  = window.location.pathname;
    return (
      <div className="app">
        <div className="sidebar">
          <Sidebar path={path} />
        </div>
        <Routes>
          <Route path="/"  element={<Home  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    );
  }
}
export default App;
