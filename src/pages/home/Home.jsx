import '../index.css';
import './home.css';
import React,{useState} from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar';

function Home() {
    const [active,setActive] = useState("null");
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
                    <div className="capsules">
                        <div className={`capsule ${active}`}  onClick={()=>{setActive("active")}}>
                            <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-dish-hotel-services-flatart-icons-lineal-color-flatarticons.png"
                                className="cap-img"
                            />
                            <p>All</p>
                        </div>
                        <div className={`capsule ${active}`}  onClick={()=>{setActive("active")}}>
                            <img src='../../Assets/Burger_perspective_matte_s.png'
                                className="cap-img"
                            />
                            <p>Burgers</p>
                        </div>
                        <div className={`capsule ${active}`}  onClick={()=>{setActive("active")}}>
                            <img src='./Assets/Pizza_perspective_matte_s.png'
                                className="cap-img"
                            />
                            <p>Pizzas</p>
                        </div>
                        <div className={`capsule ${active}`}  onClick={()=>{setActive("active")}}>
                            <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-salad-food-levitation-icongeek26-linear-colour-icongeek26.png"
                                className="cap-img"
                            />
                            <p>Salads</p>
                        </div>
                        <div className={`capsule ${active}`}  onClick={()=>{setActive("active")}}>
                            <img src='./Assets/Donut_perspective_matte_s.png' 
                                className="cap-img"
                            />
                            <p>Deserts</p>
                        </div>
                        <div className={`capsule ${active}`}  onClick={()=>{setActive("active")}}>
                            <img src='./Assets/can-dynamic-premium.png'
                                className="cap-img"
                            />
                            <p>Drinks</p>
                        </div>
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
