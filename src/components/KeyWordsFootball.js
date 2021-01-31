import Axios from 'axios';
import Questions from './Questions';
import {Link} from 'react-router-dom';
import {useState, useEffect} from "react";
import firebase from "../util/firebase";
import OBJ from "../OBJ.png"
let styles = {


}

var questions=[];




function KeywordsFootball() {
    function GetQuestions() {
        console.log("Button was pressed");
        Axios.get("https://jservice.io/api/category?id=366").then((r) => {
            r.data.clues.map(
                res => {
                    questions.push(res);
                }
            )
        });
        
}
function DeleteQuestions() {
    firebase.database().ref('CurrentEvent/').remove();
}
DeleteQuestions();
GetQuestions();
const [numberOfQuestions, setQuestions] = useState(5);

  return (
    <div style={{display: "flex", flexDirection: "row", flex:1}}>
        <div style={{backgroundColor: "white", width: "70rem", height: "100vh"}}>
            <div style={{display: "flex", flexDirection: "row", marginTop: "5rem", marginLeft: "5rem"}}>
                <img src="https://cdn.discordapp.com/attachments/755482464104874165/805221423597355047/unknown.png" style={{width: "4rem", height: "4rem"}}></img>
                <b style={{fontSize: "1.5rem", marginLeft: "1.2rem", marginTop: "0.5rem"}}>Live.ly</b>
            </div>
            <div style={{marginTop: "5rem", marginLeft: "10rem"}}>
                <b style={{fontSize: "3rem", marginLeft: "1.2rem", marginTop: "0.5rem"}}>Enter <span style={{color: "#FDB531"}}># of Questions</span></b>
                <p style={{fontSize: "1.3rem", marginLeft: "1.2rem", marginTop: "0.5rem", color: "#646464", marginTop: "2%"}}>We will scan a RSS feed and automatically create questions for this trivia event!</p>
                <input value={numberOfQuestions} onChange={(e) => {setQuestions(e.target.value); console.log(numberOfQuestions)}} className="keywordInput" type="Number" style={{marginLeft: "1.2rem", width: "35rem", borderBottomWidth: "0.1rem", borderBottomColor: "black", borderTopWidth: "0", borderLeftWidth: "0", borderRightWidth: "0", marginTop: "5%", height: "3rem", fontSize: "1.5rem"}} placeholder=""></input>

            </div>
            <div style={{marginTop: "5rem"}}>
            <Link to={{pathname:'/questions', questionProps:{questions:questions}, numberOfQuestions: numberOfQuestions, sport:40, sportName:"Football"}} >
                <button style={{marginLeft: "11.2rem", border: "0", backgroundColor: "#FDB531", height: "3.5rem", width: "20rem", textAlign:"left", color: "white", borderRadius: "0.5rem"}}><span style={{marginLeft: "1rem", fontSize: "1.2rem"}} ><b>Generate Questions</b></span></button>
            </Link>
     

            </div>
            
        </div>
        <div style={{backgroundColor: "#FDB531",  width: "30rem", height: "100vh", overflow: "hidden"}}>
        <div style={{marginLeft: "3.5rem", marginTop: "4rem"}}>
            <b style={{color: "white", fontSize: "3.2rem"}}>Football</b>
            <p style={{color:"white", fontSize: "1.2rem"}}>28th December, 5:00pm</p>

            <img src={OBJ} style={{height: "400px", width: "27em", position:"absolute", bottom:"0", right:"0"}}></img>
        </div>
        </div>


    </div>
  );
}

export default KeywordsFootball;
