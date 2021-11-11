import '../index.css';
import './home.css';
import React,{useState} from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar';
import {Data,Items }from '../../Data';
import Capsule from '../../components/Capsules/Capsule';
import Singleitem from '../../components/singleitem/Singleitem';



function Home() {
    const [active,setActive] = useState("null");
    return (
        <div className="main" >
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="home">
                <div className="body">
                    <div className="header">
                        <h2>Welcome To Eatland 🤤</h2>
                        <input type="search" placeholder="search....."/>
                    </div>
                    <div className="capsules">
                       {Data.map(data=>{
                           return(<Capsule data ={data} active={active} setActive={setActive} />)
                       })}
                        
                    </div>
                    <div className="items">
                        {Items.map(item=>{
                            return (<Singleitem item={item} />);
                        })}
                        
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
