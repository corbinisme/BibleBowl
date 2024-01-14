import { useEffect, useState } from "react";
import Question from "./Question";
function Questions(props){

    const questions = props.data;
    
    return (
        <div className="quizContainer bg-dark text-white pt-4">
            <div className="container">
            <h2 className='mb-4'>All Questions</h2>
            {questions && questions.map((question, index) => {
                return (
                    <div key={index}>
                        <Question data={question} index={index} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default Questions;