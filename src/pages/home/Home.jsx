import "../index.css";
import "./home.css";
import React, { useState,useEffect} from "react";
import { useDispatch,useSelector,DefaultRootState } from 'react-redux'
import { Data } from "../../Data";
import Capsule from "../../components/Capsules/Capsule";
import Singleitem from "../../components/singleitem/Singleitem";
import Sidecart from "../../components/sidecart/Sidecart";
import { getAllItems } from "../../actions/dataActions";

function Home() {

  const dispatch = useDispatch();
  const itemsState = useSelector(state=>state.getAllItemsReducers);
  const{items,loading,error} = itemsState;
  useEffect(()=>{
    dispatch(getAllItems());
  },[]);

  const [active, setActive] = useState("All");
  const [filtername, setFilterName] = useState("All");
  
  let filteredItems = items.filter((item) => {
      if (filtername.toLowerCase() === "all") {
        return item;
      } else if (filtername.toLowerCase() === item.type.toLowerCase()) {
        return item;
      } else if (item.name.toLowerCase().includes(filtername.toLowerCase())) {
        return item;
      } else {
        return "";
      }
    });
  
  return (
    <div className="main">
      <div className="home">
        <div className="body">
          <div className="header">
            <h2>Welcome To Eatland 🤤</h2>
            <input
              type="search"
              onChange={(e) => {
                setFilterName(e.target.value);
              }}
              placeholder="search....."
            />
          </div>
          <div className="capsules">
            {Data.map((data) => {
              return (
                <Capsule
                  data={data}
                  active={active}
                  setFilterName={setFilterName}
                  setActive={setActive}
                />
              );
            })}
          </div>
          <div className="items">
            {
              loading ? (filteredItems.length===0||error?<div className="diss">sorry we don't have any products <img src="https://img.icons8.com/ios/150/000000/disappointed--v2.png" /> </div>:""):(
                
                filteredItems.map((item) => {
                  return <Singleitem item={item} />;
                })
              )
            }
            
            
          </div>
        </div>
        <div className="cart">
          <Sidecart  />
        </div>
      </div>
    </div>
  );
}

export default Home;
