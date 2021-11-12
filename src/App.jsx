import React from 'react';
import { Items } from './Data';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/auth/Register';
import { Sidebar } from './components/sidebar/Sidebar';
import Settings from './pages/settings/Settings';
import Orders from './pages/orders/Orders';
import { addItems } from './actions/cartActions';
class App extends React.Component{
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    })
    store.dispatch(addItems(Items));
  }
  render(){
    const {list,cartList} = this.props.store.getState();
    return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Home store={this.props.store} items={list} cartItems={cartList} />} />
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
