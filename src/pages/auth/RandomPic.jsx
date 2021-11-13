import React,{useEffect,useState} from 'react';

import { Pictures } from '../../Data'

function RandomPic() {
    const [picnum,setPicNum] = useState(14);
    const piclist = Pictures.map(pic=>{
        return pic;
    });
    
    useEffect(() => {
        
        let interval = setInterval(()=>{
            // if(picnum===18){
            //     setPicNum(0);
            // }
            // else{
            //     setPicNum(picnum+1);
            // }
            setPicNum(Math.floor(Math.random() * piclist.length));
        },2000)
        return () => {
            clearInterval(interval);
        }
    }, [picnum])
    const pic = piclist[picnum];
    return (
        <div className="slider-container">
            <img src={pic.src} />
        </div>
    )
}

export default RandomPic;
