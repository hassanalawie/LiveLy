// import logo from '../logo.png';
// import beal from '../beal.png';
// import OBJ from '../OBJ.png';
// import baseballMan from '../baseballMan.png';
// import SignUp from './SignUp';
// import firebase from "../util/firebase"
// import React, {useEffect, useState} from 'react';



// import { FaCalendarAlt } from "react-icons/fa";
// import { FaQuestion } from "react-icons/fa";
// import { IoStatsChart } from "react-icons/io5";

// let styles = {
//     container: {
//         height:"100vh",
//         width:"100vw",
//         display:"flex",
//     },
//     sidebar: {
//         height:"100vh",
//         width:"20vw",
//         display:"flex",
//         backgroundColor:"#f4f4f4",
//         flexDirection:"column",


//     },
//     logoStyle:{
//         height:"50px",
//         width:"50px",
//         marginRight:"30px",

//     },
//     logoTitleBox:{
//         display:"flex",
//         alignItems:"center",
//         marginTop:"3rem",
//         marginLeft:"4rem",

//     },
//     sidebarText:{
//         fontSize:"16px",
//         fontWeight:"800",
//         color:"#263238",
//         marginLeft:"1.5rem",
//         fontFamily: "Mulish",


//     },
//     sidebarTextCurrent:{
//         fontSize:"16px",
//         fontWeight:"800",
//         color:"#FDB531",
//         marginLeft:"1.5rem"

//     },
//     listBox:{
//         listStyleType:"none",
//         padding:"0px",
//         marginLeft:"4rem",
//         marginTop:"4rem",
//     },
//     listItem:{
//         display:"flex",
//         alignItems:"center",
//         marginTop:"20px",
//         textDecoration:"none",

//     },
//     dashboard:{
//         display:"flex",
//         padding:"3rem",
//         paddingLeft:"6rem",
//         flexDirection:"column",

//     },
//     eventGrid:{
//         marginTop:"1rem",
//         display:"grid",
//         gridTemplateColumns: "repeat(2, 1fr)",
//         gridGap:"3rem 4rem",
//     },
//     eventBox:{
//         height:"150px",
//         width:"360px",
//         backgroundColor:"#FDB531",
//         borderRadius:"10px",
//         position:"relative",
//         padding:"10px",
//         paddingLeft:"40px",
//         textDecoration:"none",


//     },
//     eventBox2:{
//         height:"155px",
//         width:"360px",
//         backgroundColor:"#FC65FF",
//         borderRadius:"10px",
//         position:"relative",
//         padding:"10px",
//         paddingLeft:"40px",
//         textDecoration:"none",


//     },
//     eventBox3:{
//         height:"155px",
//         width:"360px",
//         backgroundColor:"#33FFB6",
//         borderRadius:"10px",
//         position:"relative",
//         padding:"10px",
//         paddingLeft:"40px",
//         textDecoration:"none",


//     },
// }


// function sendItem(title) {
//     firebase.database().ref('CEventName/').update({
//         title:title ,
//     });
//     firebase.database().ref('CurrentEvent/').remove();
// }

//  function Dashboard() {
//     // const RSS_URL =  "https://news.demo.inception.cloud/inception/RunningOrder/RunningOrder.rss?id=3961";
//     // fetch(RSS_URL).then(response => response.text())
//     // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//     // .then(data => console.log(data));
//     const [dataStuff, setData] = useState([]);
//      useEffect (async () => {
//         const Ref = firebase.database().ref('rss_feed/');
//         let data = {}
//         await Ref.once('value', async (snapshot) => await setData(snapshot.val()['-MSNRSW2awgpiqj42KF1'])).then((resp) => console.log(resp))

//     }, [])

    

//     console.log(dataStuff)



//   return (
//     <div style={styles.container}>
//         <div style={styles.sidebar} >
//             <div style={styles.logoTitleBox} >
//                 <img src={logo}/>
//                 {/* <h1>Live.ly</h1> */}
//             </div>
//             <ul style={styles.listBox}>
//                 <a href="#"  style={styles.listItem} >
//                     <FaCalendarAlt size="20px" color="#FDB531" />
//                     <p style={styles.sidebarTextCurrent} >Events</p>
//                 </a>
//                 <a  href="#"  style={styles.listItem} >
//                     <FaQuestion size="20px" color="#263238" />
//                     <p style={styles.sidebarText} >Producing</p>
//                 </a>
//                 <a href="#"  style={styles.listItem} >
//                     <IoStatsChart size="20px" color="#263238" />
//                     <p style={styles.sidebarText} >Engagement</p>
//                 </a>

//             </ul>
//         </div>
//         <div style={styles.dashboard} >
//             <h1 style={{textAlign:"left", fontSize:"36px", fontFamily: "Mulish",}}>
//                 Events <span style={{color:"orange"}} >Incoming from RSS Feed</span>
//             </h1>
//             <div style={styles.eventGrid} >
//              {dataStuff.map((current, index) => {
//                  console.log(current.title)
//                  if(current.title == "FOOTBALL"){
//                   return(
//                     <a href="/keywordsfootball" style={styles.eventBox} >
//                         <h1 style={{fontSize:"26px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
//                         <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.65rem"}}>Go Live</span></button>
//                         <img src={OBJ} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
//                     </a>
//                  )}else if(current.title == "BASEBALL"){
//                     return (
//                     <a href="/keywordsbaseball" style={styles.eventBox} >
//                         <h1 style={{fontSize:"26px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
//                         <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.65rem"}}>Go Live</span></button>
//                         <img src={baseballMan} style={{position:"absolute",bottom:"0", right:"0", width:"150px", height:"150px"}} />
//                     </a>
//                  )}else if(current.title == "BASKETBALL"){
//                     return (
//                     <a href="/keywordsbasketball" style={styles.eventBox} >
//                         <h1 style={{fontSize:"26px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
//                         <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.65rem"}}>Go Live</span></button>
//                         <img src={beal} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
//                     </a>
//                     )}else{ 
//                         return(
//                         <a href="#" style={styles.eventBox} >
//                             <h1 style={{fontSize:"26px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
//                             <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.65rem"}}>Go Live</span></button>
//                         </a>)}
//              })}
//              {/* {dataStuff['-MSNRSW2awgpiqj42KF1'].title} */}
//                 {/* <a href="/keywordsbasketball" style={styles.eventBox} >
//                     <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Heads - Whitaker</h1>
//                     <button style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.65rem"}}>Go Live</span></button>
//                 </a> */}
                
//                 {/* <a href="/keywordsbasketball"  style={styles.eventBox} >
//                     <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
//                     <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
//                      <img src={beal} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
//                 </a> */}
                
//                 {/* <a href="/keywordsfootball" style={styles.eventBox2} >
//                     <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
//                     <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
//                      <img src={OBJ} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
//                 </a>
                
//                 <a href="/keywordsfootball"  style={styles.eventBox2} >
//                     <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
//                     <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
//                      <img src={OBJ} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
//                 </a>
                
//                 <a href="/keywordsbaseball"  style={styles.eventBox3} >
//                     <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
//                     <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
//                      <img src={baseballMan} style={{position:"absolute",bottom:"0", right:"0", width:"150px", height:"150px"}} />
//                 </a>
                
//                 <a href="/keywordsbaseball"  style={styles.eventBox3} >
//                     <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
//                     <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
//                      <img src={baseballMan} style={{position:"absolute",bottom:"0", right:"0", width:"150px", height:"150px"}} />
//                 </a> */}


//             </div>
//         </div>
//     </div>
//   );
// }

// export default Dashboard;
import logo from '../logo.png';
import beal from '../beal.png';
import OBJ from '../OBJ.png';
import tennis from '../tennis.png';
import baseballMan from '../baseballMan.png';
import SignUp from './SignUp';
import firebase from "../util/firebase"
import React, {useEffect, useState} from 'react';



import { FaCalendarAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";



function sendItem(title) {
    firebase.database().ref('CEventName/').update({
        title:title ,
    });
    firebase.database().ref('CurrentEvent/').remove();
}

 function Dashboard() {
    // const RSS_URL =  "https://news.demo.inception.cloud/inception/RunningOrder/RunningOrder.rss?id=3961";
    // fetch(RSS_URL).then(response => response.text())
    // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    // .then(data => console.log(data));
    const [dataStuff, setData] = useState([]);
    const [color, setColor] = useState('');
    const [width, setWidth] = useState(0);
     useEffect (async () => {
        const Ref = firebase.database().ref('rss_feed/');
        let data = {}
        await Ref.once('value', async (snapshot) => await setData(snapshot.val()['-MSNRSW2awgpiqj42KF1'])).then((resp) => console.log(resp))

    }, [])


    let styles = {
        container: {
            height:"100vh",
            width:"100vw",
            display:"flex",
        },
        sidebar: {
            height:"100vh",
            width:"20vw",
            display:"flex",
            backgroundColor:"#f4f4f4",
            flexDirection:"column",
    
    
        },
        logoStyle:{
            height:"50px",
            width:"50px",
            marginRight:"30px",
    
        },
        logoTitleBox:{
            display:"flex",
            alignItems:"center",
            marginTop:"3rem",
            marginLeft:"4rem",
    
        },
        sidebarText:{
            fontSize:"16px",
            fontWeight:"800",
            color:"#263238",
            marginLeft:"1.5rem",
            fontFamily: "Mulish",
    
    
        },
        sidebarTextCurrent:{
            fontSize:"16px",
            fontWeight:"800",
            color:"#FDB531",
            marginLeft:"1.5rem"
    
        },
        listBox:{
            listStyleType:"none",
            padding:"0px",
            marginLeft:"4rem",
            marginTop:"4rem",
            marginBottom: '4rem'
        },
        listItem:{
            display:"flex",
            alignItems:"center",
            marginTop:"20px",
            textDecoration:"none",
        },
        dashboard:{
            display:"flex",
            padding:"3rem",
            paddingLeft:"6rem",
            flexDirection:"column",
    
        },
        eventGrid:{
            marginTop:"1rem",
            display:"grid",
            gridGap:"3rem 4rem",
        },
        eventBox:{
            height:"200px",
            width:"83%",
            backgroundColor:"#FDB531",
            borderRadius:"10px",
            borderColor: color,
            borderWidth: width,
            position:"relative",
            padding:"10px",
            paddingTop:"25px",
            paddingLeft:"55px",
            textDecoration:"none",
    
    
        },
        eventBox2:{
            height:"155px",
            width:"360px",
            backgroundColor:"#FC65FF",
            borderRadius:"10px",
            position:"relative",
            padding:"10px",
            paddingLeft:"40px",
            textDecoration:"none",
    
    
        },
        eventBox3:{
            height:"155px",
            width:"360px",
            backgroundColor:"#33FFB6",
            borderRadius:"10px",
            position:"relative",
            padding:"10px",
            paddingLeft:"40px",
            textDecoration:"none",
    
    
        },
    }

    

    console.log(dataStuff)



  return (
    <div style={styles.container}>
        <div style={styles.sidebar} >
            <div style={styles.logoTitleBox} >
                <img src={logo}/>
                {/* <h1>Live.ly</h1> */}
            </div>
            <ul style={styles.listBox}>
                <a href="#"  style={styles.listItem} >
                    <FaCalendarAlt size="20px" color="#FDB531" />
                    <p style={styles.sidebarTextCurrent} >Events</p>
                </a>
                <a  href="#"  style={styles.listItem} >
                    <FaQuestion size="20px" color="#263238" />
                    <p style={styles.sidebarText} >Producing</p>
                </a>
                <a href="#"  style={styles.listItem} >
                    <IoStatsChart size="20px" color="#263238" />
                    <p style={styles.sidebarText} >Engagement</p>
                </a>

            </ul>
        </div>
        <div style={styles.dashboard} >
            <h1 style={{textAlign:"left", fontSize:"36px", fontFamily: "Mulish", marginBottom: '10%'}}>
                Events <span style={{color:"orange"}} >Incoming from RSS Feed</span>
            </h1>
            <div style={styles.eventGrid} >
             {dataStuff.map((current, index) => {
                 console.log(current)
                 if(current.notes == ""){

                    const colorList = ["#E84E61", "#FDF7C3"]
  
                     return(
                         <div style={{ paddingLeft: '10%', paddingTop: '3%', paddingBottom: '3%', borderColor: 'black', borderWidth: 1,  backgroundColor: "#FFE5D9",  borderRadius: 10, width: '85%', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <h1 style={{ justifyContent: 'center', alignItems: 'center', fontSize:"26px", fontWeight:"800", color:"#929292", textAlign:"left", fontFamily: "Mulish", }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
                            <button onClick={(e) =>{e.currentTarget.parentNode.remove()}} style={{marginRight:"30px", height: "35px", display:"flex", justifyContent:"center", alignItems:"center",borderRadius:"20px", backgroundColor:"tomato", border:"0px solid black", padding:"6px"}} ><p style={{fontFamily:"Mulish", fontWeight:"800", fontSize:"14px"}} >Complete</p></button>
                         </div>
                         
                     )
                 } else if(current.title == "BASEBALL") {
                    return (
                        <a href="/keywordsbaseball" onClick={() => {sendItem(current.title); setColor("#E84E61");  setWidth(3); console.log('settng color red') }}  style={styles.eventBox} >
                            <h1 style={{fontSize:"36px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", width: '100%' }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
                            <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.75rem"}}>Go Live</span></button>
                            <img src={baseballMan} style={{position:"absolute",bottom:"10px", right:"25px", width:"200px", height:"200px", opacity: 0.2}} />
                            <button onClick={(e) =>{e.currentTarget.parentNode.remove()}} style={{marginRight:"30px", height: "35px", display:"flex", justifyContent:"center", alignItems:"center",borderRadius:"20px", backgroundColor:"tomato",marginTop:"20px", border:"0px solid black", padding:"6px"}} ><p style={{fontFamily:"Mulish", fontWeight:"800", fontSize:"14px"}} >Complete</p></button>
                     </a>
                    )  
                 } else if(current.title == "BASKETBALL") {
                    return (
                        <a href="/keywordsbasketball" style={styles.eventBox} >
                            <h1 style={{fontSize:"36px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", width: '100%' }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
                            <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.75rem"}}>Go Live</span></button>
                            <img src={beal} style={{position:"absolute",bottom:"10px", right:"25px", width:"200px", height:"200px", opacity: 0.2}} />
                            <button onClick={(e) =>{e.currentTarget.parentNode.remove()}} style={{marginRight:"30px", height: "35px", display:"flex", justifyContent:"center", alignItems:"center",borderRadius:"20px", backgroundColor:"tomato",marginTop:"20px", border:"0px solid black", padding:"6px"}} ><p style={{fontFamily:"Mulish", fontWeight:"800", fontSize:"14px"}} >Complete</p></button>
                     </a>
                    )  
                 } else if(current.title == "FOOTBALL") {
                    return (
                        <a href="/keywordsfootball" style={styles.eventBox} >
                            <h1 style={{fontSize:"36px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", width: '100%' }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
                            <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.75rem"}}>Go Live</span></button>
                            <img src={OBJ} style={{position:"absolute",bottom:"10px", right:"25px", width:"200px", height:"200px", opacity: 0.2}} />
                            <button onClick={(e) =>{e.currentTarget.parentNode.remove()}} style={{marginRight:"30px", height: "35px", display:"flex", justifyContent:"center", alignItems:"center",borderRadius:"20px", backgroundColor:"tomato",marginTop:"20px", border:"0px solid black", padding:"6px"}} ><p style={{fontFamily:"Mulish", fontWeight:"800", fontSize:"14px"}} >Complete</p></button>
                     </a>
                    )  
                 } else if(current.title == "TENNIS") {
                    return (
                        <a href="/keywordstennis" style={styles.eventBox} >
                            <h1 style={{fontSize:"36px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", width: '100%' }} >{current.title.toUpperCase()[0]}{current.title.toLowerCase().substring(1,)}</h1>
                            <button onClick={() =>  sendItem(current.title)} style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.75rem"}}>Go Live</span></button>
                            <img src={tennis} style={{position:"absolute",bottom:"10px", right:"25px", width:"200px", height:"200px", opacity: 0.2}} />
                            <button onClick={(e) =>{e.currentTarget.parentNode.remove()}} style={{marginRight:"30px", height: "35px", display:"flex", justifyContent:"center", alignItems:"center",borderRadius:"20px", backgroundColor:"tomato",marginTop:"20px", border:"0px solid black", padding:"6px"}} ><p style={{fontFamily:"Mulish", fontWeight:"800", fontSize:"14px"}} >Complete</p></button>
                     </a>
                    )  
                 }
                 
             })}
             {/* {dataStuff['-MSNRSW2awgpiqj42KF1'].title} */}
                {/* <a href="/keywordsbasketball" style={styles.eventBox} >
                    <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Heads - Whitaker</h1>
                    <button style={{backgroundColor: "#FFD890", padding: "0.5rem 2rem", color: "black",  fontFamily: "Mulish", border: "0", borderRadius: 25,}}><span style={{fontSize: "0.65rem"}}>Go Live</span></button>
                </a>
                
                <a href="/keywordsbasketball"  style={styles.eventBox} >
                    <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
                    <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
                     <img src={beal} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
                </a>
                
                <a href="/keywordsfootball" style={styles.eventBox2} >
                    <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
                    <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
                     <img src={OBJ} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
                </a>
                
                <a href="/keywordsfootball"  style={styles.eventBox2} >
                    <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
                    <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
                     <img src={OBJ} style={{position:"absolute",bottom:"0", right:"0", width:"180px", height:"150px"}} />
                </a>
                
                <a href="/keywordsbaseball"  style={styles.eventBox3} >
                    <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
                    <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
                     <img src={baseballMan} style={{position:"absolute",bottom:"0", right:"0", width:"150px", height:"150px"}} />
                </a>
                
                <a href="/keywordsbaseball"  style={styles.eventBox3} >
                    <h1 style={{fontSize:"32px", fontWeight:"800", color:"white", textAlign:"left", fontFamily: "Mulish", }} >Raptors <br></br> @ Wizards</h1>
                    <p style={{fontSize:"14px", fontWeight:"400", color:"white",textAlign:"left", fontFamily: "Mulish", }} >Today, 5:00pm</p>
                     <img src={baseballMan} style={{position:"absolute",bottom:"0", right:"0", width:"150px", height:"150px"}} />
                </a> */}
                <div style={{paddingBottom: '5rem'}}></div>

            </div>
        </div>
    </div>
  );
}

export default Dashboard;