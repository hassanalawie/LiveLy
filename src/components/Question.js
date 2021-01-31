import logo from '../logo.png';
let styles = {


}


function Question(props) {
    if(getRandomInt(1,4) == 1){
  return (
        <div style={{height:"235px", width:"600px", display:"flex", flexDirection:"column", padding:"10px"}} > 
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <a  style={{fontFamily:"Mulish", fontWeight:"800", color:"blue",
            textDecoration:"none"}}>Switch</a>
            <p style={{ marginLeft:"2rem" }} >{props.question.question}</p>
        </div> 
        <div style={{display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap:"15px 10px", marginTop:"20px"}} >
            <div style={{width:"280px", height:"55px", backgroundColor:"orange", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >A</p>
                   <p style={{marginLeft:"15px"}}>{props.question.answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >B</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >C</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >D</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>


        </div>
    </div>
  )}else if(getRandomInt(2,4) == 2) {
    return (
        <div style={{height:"235px", width:"600px", display:"flex", flexDirection:"column", padding:"10px"}} > 
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <a href="#" style={{fontFamily:"Mulish", fontWeight:"800", color:"blue",
            textDecoration:"none"}}>Switch</a>

            <p style={{ marginLeft:"2rem" }} >{props.question.question}</p>
        </div> 
        <div style={{display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap:"15px 10px", marginTop:"20px"}} >

            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >B</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"orange", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >A</p>
                   <p style={{marginLeft:"15px"}}>{props.question.answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >C</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >D</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>


        </div>
    </div>
  )
  }else if(getRandomInt(3,4) == 3) {
    return (
        <div style={{height:"235px", width:"600px", display:"flex", flexDirection:"column", padding:"10px"}} > 
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <a href="#" style={{fontFamily:"Mulish", fontWeight:"800", color:"blue",
            textDecoration:"none"}}>Switch</a>

            <p style={{ marginLeft:"2rem" }} >{props.question.question}</p>
        </div> 
        <div style={{display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap:"15px 10px", marginTop:"20px"}} >

            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >B</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>
            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >C</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>

            <div style={{width:"280px", height:"55px", backgroundColor:"orange", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >A</p>
                   <p style={{marginLeft:"15px"}}>{props.question.answer}</p>
               </div>
               
            </div>

            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >D</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>


        </div>
    </div>
  )
  }else {
    return (
        <div style={{height:"235px", width:"600px", display:"flex", flexDirection:"column", padding:"10px"}} > 
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <a href="#" style={{fontFamily:"Mulish", fontWeight:"800", color:"blue",
            textDecoration:"none"}}>Switch</a>

            <p style={{ marginLeft:"2rem" }} >{props.question.question}</p>
        </div> 
        <div style={{display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap:"15px 10px", marginTop:"20px"}} >

            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >B</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>


            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >C</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>
               
            </div>

            <div style={{width:"280px", height:"55px", backgroundColor:"#f5f5f5", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >D</p>
                   <p style={{marginLeft:"15px"}}>{props.questionList[getRandomInt(0,13)].answer}</p>
               </div>   
            </div>

            <div style={{width:"280px", height:"55px", backgroundColor:"orange", borderRadius:"10px" }} >
               <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                   <p style={{marginLeft:"35px", color:"#BEBEBE"}} >A</p>
                   <p style={{marginLeft:"15px"}}>{props.question.answer}</p>
               </div>
               
            </div>

        </div>
    </div>
  )
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }   
}

export default Question;
