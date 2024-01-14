import { useEffect, useState } from "react";
import Question from "./Question";
function RandomQuestion(props){

    const data= props.data;
    const [randomIndex, setrandomIndex] = useState(1);

    useEffect(() => {

        setrandomIndex(Math.floor(Math.random() * data.length));
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
                                onClick={() => setrandomIndex(Math.floor(Math.random() * data.length))}>Next Question
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