import { useEffect, useState } from "react";
import Question from "./Question";
function RandomQuestion(props){

    const st = window.localStorage;
    const data= props.data;
    const [completed, setCompleted] = useState(false);
    const [randomIndex, setrandomIndex] = useState(1);
    const [usedQuestions, setUsedQuestions] = useState([st.getItem("usedQuestions")? st.getItem("usedQuestions").split(","): []]);


    const generateRandom = () => {
        let random = Math.floor(Math.random() * data.length);

        // keep making a random number until it is not in the usedQuestions array
        while(usedQuestions.includes(random)){
            // check to see if all questions have been used
            if(usedQuestions.length == data.length){
                // reset the usedQuestions array
                setUsedQuestions([]);
                st.removeItem("usedQuestions");
                setCompleted(true);
                break;
            }
            random = Math.floor(Math.random() * data.length);
            
        }
        if(completed){
            alert("All questions have been used. Winner winner chicken dinner!");
            
            
        } else {
            setrandomIndex(random);
            setUsedQuestions([...usedQuestions, random]);
            st.setItem("usedQuestions", usedQuestions.join(","));
        }
        
    }
    useEffect(() => {
        // make sure it has not been used in this session
        generateRandom();
    }, [data])

    const givePoints = props.givePoints;
    return (
        <div className="container pb-4">
            <h2 className='mb-4'>Random Question</h2>
            {data.length>0 && <>
                <Question data={data[randomIndex]} index={randomIndex} />
                <div className="scoreboard">
                    <div className="row">
                        <div className="col-sm-4">
                        <span className='btn btn-lg btn-danger'>{props.team1Score}</span>
                            
                            <button className='btn btn-warning btn-lg' 
                                onClick={()=> givePoints(1, 1, randomIndex)}>
                                <span>+</span>
                            </button>
                            <button className='btn btn-outline-warning text-dark' 
                                    onClick={()=> givePoints(1, -1, randomIndex)}>
                                        <span>-</span>
                                </button>
                            <span className="btn">
                                {(props.team1Name!=""? props.team1Name: "Team 1")}
                            </span>
                            
                            
                        </div>
                        <div className="col-sm-4 text-center">
                            <button className="btn btn-primary" 
                                onClick={() => generateRandom()}>Next Question
                            </button>
                        </div>
                        <div className="col-sm-4 text-end">
                            <span className="btn">{(props.team2Name!=""? props.team2Name: "Team 2")}</span>
                                
                                <button className='btn btn-outline-warning text-dark' 
                                    onClick={()=> givePoints(2, -1, randomIndex)}>
                                        <span>-</span>
                                </button>
                                <button className='btn btn-warning btn-lg' 
                                    onClick={()=> givePoints(2, 1, randomIndex)}>
                                        <span>+</span>
                                </button>

                                <span className='btn btn-lg btn-danger'>{props.team2Score}</span>
                        
                        

                        </div>
                    </div>
                </div>
               
                
                </>
                
            }
            
            
            
        </div>
    )
}
export default RandomQuestion;