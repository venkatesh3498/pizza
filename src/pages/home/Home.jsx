import '../index.css';
import './home.css';
import React,{useState} from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar';
import {Data,Items }from '../../Data';
import Capsule from '../../components/Capsules/Capsule';
import Singleitem from '../../components/singleitem/Singleitem';


function Home() {
    
    const [active,setActive] = useState("null");
    const [filtername,setFilterName] = useState("All")
    const filteredItems = Items.filter(item=>{
        if(filtername.toLowerCase()==="all"){
            return item;
        }
        else if(filtername.toLowerCase()===item.type.toLowerCase()){
            return item;
        }
        else if(item.name.toLowerCase().includes(filtername.toLowerCase())){
            return item;
        }
        
        else {
            return ""
        }
    })
    return (
        <div className="main" >
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="home">
                <div className="body">
                    <div className="header">
                        <h2>Welcome To Eatland 🤤</h2>
                        <input type="search" onChange={(e)=>{setFilterName(e.target.value)}} placeholder="search....."/>
                    </div>
                    <div className="capsules">
                       {Data.map(data=>{
                           return(<Capsule data ={data} active={active} setFilterName={setFilterName} setActive={setActive} />)
                       })}
                        
                    </div>
                    <div className="items">
                        {filteredItems.map(item=>{
                            return (
                                    <Singleitem item={item} />  
                            );
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
