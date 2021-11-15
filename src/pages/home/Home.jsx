import "../index.css";
import "./home.css";
import React, { useState } from "react";
import { Data } from "../../Data";
import Capsule from "../../components/Capsules/Capsule";
import Singleitem from "../../components/singleitem/Singleitem";
import Sidecart from "../../components/sidecart/Sidecart";

function Home({ items, cartItems, store }) {
  console.log(window.location.pathname);
  const [active, setActive] = useState("All");
  const [filtername, setFilterName] = useState("All");
  const filteredItems = items.filter((item) => {
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
              filteredItems.length===0?<div className="diss">sorry we couldn't find any result <img src="https://img.icons8.com/ios/150/000000/disappointed--v2.png" /> </div>:""
            }
            {filteredItems.map((item) => {
              return <Singleitem item={item} dispatch={store.dispatch}/>;
            })}
          </div>
        </div>
        <div className="cart">
          <Sidecart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default Home;
