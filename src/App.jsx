
import ProgressBar from 'react-customizable-progressbar'
import { useState,useEffect, useMemo } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';



function App({datas}) {
  const [timeAmount, setTimeAmount] = useState(45)
  const [amount, setAmount] = useState(1000)
  const [timeFreeze,setTimeFreeze] = useState(false);
  const [username, setUsername] = useState(null);
  const [questionNumber,setQuestionNumber] = useState(1);
  const [stop,setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const money = ["₹ 1000","₹ 2000"," ₹ 3000","₹ 5000","₹ 10000"," ₹ 20000","₹ 40000",
    "₹ 80000","₹ 160000","₹ 320000","₹ 640000","₹ 1280000","₹ 2500000","₹ 5000000","₹ 10000000"
  ]
  const moneyPyramid = useMemo(() => 
    [
      {id:1,amount:"₹ 1000"},
      {id:2,amount:"₹ 2000"},
      {id:3,amount:"₹ 3000"},
      {id:4,amount:"₹ 5000"},
      {id:5,amount:"₹ 10000"},
      {id:6,amount:"₹ 20000"},
      {id:7,amount:"₹ 40000"},
      {id:8,amount:"₹ 80000"},
      {id:9,amount:"₹ 160000"},
      {id:10,amount:"₹ 320000"},
      {id:11,amount:"₹ 640000"},
      {id:12,amount:"₹ 1280000"},
      {id:13,amount:"₹ 2500000"},
      {id:14,amount:"₹ 5000000"},
      {id:15,amount:"₹ 10000000"},
    ].reverse(),
  []);
  const data = [...datas];

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount)

  }, [moneyPyramid,questionNumber])
  
  useEffect(() => {
    let num = questionNumber;
    setAmount(money[num-1]);
    
  }, [questionNumber])
  const timee = <Timer setTimeAmount = {setTimeAmount} setTimeFreeze={setTimeFreeze} timeFreez={timeFreeze} setStop={setStop} questionNumber={questionNumber} />;
  return (
      <div className="app" >
        
        {username ? (
          <>
            <div className="main">
            {stop ? (<><div className="author"><h3>Made By<a target="_blank" href="https://venkateswararao.netlify.app" className="authorName">Venkatesh</a></h3></div><div className="endText" ><h1>Congratulation {username}</h1> <h3>You Earned {earned}</h3></div></>):(
              <>
              <div className="top">
                <div className="author"><h3>Made By<a target="_blank" href="https://venkateswararao.netlify.app" className="authorName">Venkatesh</a></h3></div>
                <div className="mobPyramid">
                  <span>{amount}</span>

                </div>
                <div className="timer" >
                  {timee}  
                </div>
              </div>
              <div className="bottom">
                <Trivia data = {data} 
                  username = {username}
                  setTimeFreeze = {setTimeFreeze}
                  setStop = {setStop} 
                  questionNumber = {questionNumber}
                  setQuestionNumber = {setQuestionNumber} 
                />
              </div>
            </>)}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m)=>{
                return(
                  <li className={questionNumber === m.id ?"moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
                );
              })}
              
              
            </ul>
          </div>
          </>
        ): <Start setUsername={setUsername}/> }
        
      </div>
  );
}

export default App;
