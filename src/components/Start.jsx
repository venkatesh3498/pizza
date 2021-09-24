import { useRef } from "react"


export default function Start({setUsername}) {
    const inputRef = useRef();
    const handleStart = ()=>{
        setUsername(inputRef.current.value);
    }
    return (
        <div className="start" >
            <input type="text" placeholder="Enter Your Name" required ref={inputRef} className="startInput" />
            <button className="startButton" onClick={handleStart}>Start</button>
        </div>
    )
}
