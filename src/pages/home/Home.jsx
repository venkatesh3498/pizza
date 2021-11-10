import '../index.css';
import './home.css';

import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar';

function Home() {
    return (
        <div className="main">
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="home">
                <div className="body">
                    <div className="header">
                        <h2>Welcome To Eatland 🤤</h2>
                        <input type="search" placeholder="search....."/>
                    </div>
                </div>
                <div className="cart">
                    This Is From Cart
                </div>
            </div>
        </div>
    )
}

export default Home;
