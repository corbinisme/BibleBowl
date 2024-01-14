import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Questions from './Components/Questions';
import Question from './Components/Question';
import RandomQuestion from "./Components/RandomQuestion";
import Teams from "./Components/Teams";

function App() {
  const st = window.localStorage;
  const [questions, setQuestions] = useState([]);
  const [team1Name, setTeam1Name] = useState((st.getItem("team1Name")? st.getItem("team1Name"): ""));
  const [team2Name, setTeam2Name] = useState(st.getItem("team2Name")? st.getItem("team2Name"): "");
  const [team1Score, setTeam1Score] = useState(st.getItem("team1Score")? parseInt(st.getItem("team1Score")): 0);
  const [team2Score, setTeam2Score] = useState(st.getItem("team2Score")? parseInt(st.getItem("team2Score")): 0);
  

  const setTeamName = (team, name) => {
    if(team == 1){
      setTeam1Name(name);
      if(name != ""){
        st.setItem("team1Name", name);
      }
    }
    if(team == 2){
      setTeam2Name(name);
      if(name != ""){
        st.setItem("team2Name", name);
      }
    }
  }
  const givePoints = (team, value, index) => {
    
    if(team == 1){
      const newVal = team1Score + value;
      st.setItem("team1Score", newVal);
      setTeam1Score(newVal);
      
    }
    if(team == 2){
      const newVal = team2Score + value;
      st.setItem("team2Score", newVal);
      setTeam2Score(newVal);
     
    }
  }
  useEffect(() => {

    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTzAe06Z6tBYnq25WNROcX_0f2Ed4Q10pG0jos527ruVX_x7qrd0qdQn54-n8vVBPJCjjPm8pwa0J0K/pub?gid=313637491&single=true&output=tsv")
    .then(response => response.text())
    .then(data => {
        let counter = 0;
        let rows = data.split("\n");
        let tempQuestions = [];
        rows.forEach(element => {
            if(counter ==false){
                console.log("This is the header row");
            } else {
                let temp = {};
                const elements = element.split("\t");
                temp["question"] = elements[0];
                temp["answer"] = elements[1];
                temp["reference"] = elements[2];
                tempQuestions.push(temp);
            
            }
            counter++;
        });
        setQuestions(tempQuestions);
    })
  }
  ,[])


  return (
    <div className="quizContainer">
      
        
      {questions && <>
        <Teams 
        setTeamName={setTeamName}
        team1Name={team1Name} 
        team2Name={team2Name} 
        team1Score={team1Score} 
        team2Score={team2Score} 
        />
      
        <RandomQuestion 
        data={questions} 
        team1Name={team1Name} 
        team2Name={team2Name}
        team1Score={team1Score}
        team2Score={team2Score}
        givePoints={givePoints} />
        </>
      }
      {questions && 
        <Questions data={questions} />
      }
    </div>
  );
}

export default App;
