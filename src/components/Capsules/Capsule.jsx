import React from 'react';
import './capsule.css';
function Capsule({data,active,setActive}) {
    return (
        <div className={data.name==active? "capsule active":"capsule"} onClick={()=>{setActive(data.name)}}>
            <img src={data.src}
                className="cap-img"
            />
            <p>{data.name}</p>
        </div>
    )
}

export default Capsule
