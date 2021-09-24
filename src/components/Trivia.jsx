import React from "react";
import { useEffect , useState} from "react";
import useSound from "use-sound";
import play from "../assets/paly.mp3";
import correct from "../assets/correct.mp3";
import wait from "../assets/wait.mp3";
import wrong from "../assets/wrong.mp3";
const Trivia = ({data,setStop,setTimeFreeze,questionNumber,setQuestionNumber})=> {
    
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answers");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [waits] = useSound(wait);
    const [wrongAnswer] = useSound(wrong);

    useEffect(()=>{
        letsPlay();
    },[letsPlay]);

    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    },[data,questionNumber])


    console.log(question?.correct_answer);
    const delay = (duration,callback)=>{
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleclick = (a)=>{
        setTimeFreeze(true);
        let b = question?.correct_answer;
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000,()=>
            setClassName(a==b ? "answer correct" : "answer wrong")
        );
        delay(5000, ()=>{
                if(a===b){
                    correctAnswer();
                    
                    delay(3000,()=>{
                        setQuestionNumber(prev => prev+1);
                        setSelectedAnswer(null);
                    })
                    
                }
                else{
                    wrongAnswer();
                    delay(1000, () => {
                        setStop(true);
                    });
                }
            }
        )
        
    }
    return(
        <div className="trivia">
            <div className="question">{question?.question} 
                
            </div>
            <div className="answers">
            
                {question?.answers.map((a)=>{
                    return(<div className={selectedAnswer === a ? className : "answer"} onClick={() => !selectedAnswer && handleclick(a)} >{a}</div>)
                })}
            </div>
        </div>
    );
    
}
 
export default Trivia;