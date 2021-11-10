import '../index.css';
import './home.css';

import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar';

function Home() {
    return (
        <div className="main">
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="home">
                <h1>This Is For Home Page</h1>
            </div>
        </div>
    )
}

export default Home;
