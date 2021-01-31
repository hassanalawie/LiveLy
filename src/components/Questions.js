import logo from '../logo.png';
import Question from './Question';
import React, {useEffect, useState} from 'react';
import firebase from "../util/firebase"
let styles = {


}

function genNum(lim) {
  return Math.floor((Math.random() * 70) + 1);
}

function pushFirebase(qu, all) {
  const ref = firebase.database().ref('CurrentEvent/Questions');
  let a = all.length - 1
  let b = Math.floor((Math.random() * 70) + 1);
  let p = []
  while (p.length <= 3) {
    let c = genNum(a)
    if (!p.includes(c)) {
      p.push(c)
    }
  }
  let h = all[p[2]].answer
  let g = all[p[1]].answer
  let i = all[p[0]].answer

  let questionGiven = {
    question: qu.question,
    answer: qu.answer,
    optionB: i,
    optionC: g,
    optionD: h,
  }

  ref.push(questionGiven)
  
  }






var b = 0
function Questions(props) {

  
  return (
    <div style={{display: "flex", flexDirection: "row", flex:1}}>
        <div style={{backgroundColor: "white", width: "70vw", height: "100vh"}}>
            
      
            <div style={{marginTop: "5rem", display:"flex", flexDirection:"column", marginLeft:"8rem"}}>
                <img src={logo} style={{width:"200px", }}></img>
                <p style={{fontSize: "3rem", marginLeft: "1.2rem", marginTop: "5rem", fontFamily:"Mulish", fontWeight:"800", textAlign:"left"}}>Questions <span style={{color: "#FDB531"}}>Generated </span></p>
            {
            
             shuffle(props.location.questionProps.questions).slice(0, props.location.numberOfQuestions).map(
                    e => {
                        {pushFirebase(e, props.location.questionProps.questions)}
                        {b=1}

                        return( 
                            <Question questionList = {props.location.questionProps.questions} question={e} number={b} /> 

                        )
                    }

                )
            }
            </div>

           

        </div>



        <div style={{backgroundColor: "#FDB531",  width: "30vw", height: "40vh", position:"-webkit-sticky", top:0}}>
            <div style={{marginLeft: "3.5rem", marginTop: "4rem"}}>
                <b style={{color: "white", fontSize: "3.2rem"}}>Raptors @<br />Wizards</b>
                <p style={{color:"white", fontSize: "1.2rem"}}>28th December, 5:00pm</p>

                {/* <img src="https://cdn.discordapp.com/attachments/804898083241459732/805267413125955594/unknown.png" style={{height: "50vh", width: "29.5vw", position:"absolute", bottom:"0", right:"0"}}></img> */}
            </div>
        </div>


    </div>

  );
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}

export default Questions;
