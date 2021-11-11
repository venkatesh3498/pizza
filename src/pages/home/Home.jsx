import '../index.css';
import './home.css';
import React,{useState} from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar';
import burger from '../../Assets/Burger_perspective_matte_s.png';
import pizza from '../../Assets/Pizza_perspective_matte_s.png';
import desert from '../../Assets/Donut_perspective_matte_s.png';
import drink from '../../Assets/can-dynamic-premium.png';
import Data from '../../Data';
import Capsule from '../../components/Capsules/Capsule';



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
                </div>
                <div className="cart">
                    This Is From Cart
                </div>
            </div>
        </div>
    )
}

export default Home;
