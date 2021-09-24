import { useEffect, useState } from "react";


export default function Timer({setStop,questionNumber,setTimeFreeze,timeFreeze}) {
    const [timer, setTimer] = useState(30);
    useEffect(() => {
        
        if(timer===0) return setStop(true);
        const interval = setInterval(() => {
            setTimer(prev => prev-1);
        }, 1000);
        if(timeFreeze) return clearInterval(interval);
        return ()=> clearInterval(interval);
        
    },[setStop,timer]);


    useEffect(() => {
        setTimeFreeze(false);
        if(questionNumber>5){
            setTimer(60);
        }
        else if(questionNumber>10){
            setTimer(180);
        }
        else{
            setTimer(45);
        }
    }, [questionNumber]);
    return timer;
}
