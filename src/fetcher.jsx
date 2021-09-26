import React from 'react';
import App from './App';
import './app.css';
import { CommonLoading } from 'react-loadingg';
class Fetcher extends React.Component {
    state = {
        
        quiz:[
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },
            {
                id:null,
                loading:true,
                question:null,
                correct_answer:null,
                answers:null
            },

        ]
    }
    async componentDidMount(){
        const url = "https://opentdb.com/api.php?amount=15&category=9&type=multiple";
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;
        const {quiz} = this.state;
        
        
        

        for(let i =0;i<results.length;i++){
            quiz[i].id=i+1;
            quiz[i].question = results[i].question;
            quiz[i].loading=false;
            quiz[i].correct_answer=results[i].correct_answer;
            quiz[i].answers=results[i].incorrect_answers;
            quiz[i].answers=[...this.state.quiz[i].answers,this.state.quiz[i].correct_answer]
        }
        
        
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            
            // While there remain elements to shuffle...
            while (currentIndex !== 0) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
        }
        for(let i=0;i<=14;i++){
            quiz[i].answers=shuffle(this.state.quiz[i].answers)
            this.setState({
                quiz:quiz
            })
        }
        
        
        
        
    }
    
    render() 
    { 
        
        return (
            <div >
                {this.state.quiz[14].loading ? 
                    (<CommonLoading />):
                    (<>
                        <App datas={this.state.quiz} />
                    </>
                    )
                }
            </div>
        )
        
        
    }
}

export default Fetcher;