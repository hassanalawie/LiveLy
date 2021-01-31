import React from "react";
import logo from '../logo1.png';
import SignUp from './SignUp';
import {Link} from 'react-router-dom';

let styles = {
    container: {
        height:"100vh",
        width:"100vw",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    logoStyle:{
        height:"90px",
        width:"90px",

    },
    emailInput:{
        height:"57px",
        width:"346px",
        borderRadius:"10px",
        color:"#AEAEAE",
        border:"0px solid #ffffff",
        backgroundColor:"#f5f5f5",
        marginTop:"30px",
        paddingLeft:"30px",
        fontSize:"16px",
    },
    loginForm:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
    },
    loginSubmit:{
        height:"48px",
        width:"346px",
        backgroundColor:"#FAD574",
        border:"0px solid #ffffff",
        borderRadius:"10px",
        marginTop:"20px",
        fontFamily:"system-ui",
        color:"white",
        fontWeight:"700",
        fontSize:"16px",
    },
    createAccountSubmit:{
        height:"48px",
        width:"346px",
        backgroundColor:"#F73657",
        border:"0px solid #ffffff",
        borderRadius:"10px",
        marginTop:"20px",
        fontFamily:"system-ui",
        color:"white",
        fontWeight:"700",
        fontSize:"16px",
    },
  }

function SignIn() {
  return (
    <div style={styles.container}>
        <img src={logo} style={styles.logoStyle} />
        <h1>Sign In</h1>
        <form style = {styles.loginForm}>
          <input placeholder="Username" type="text" style={styles.emailInput}/>
          <input placeholder="Password" type="text" style={styles.emailInput}/>
          <Link to="/dashboard" >
            <input value="Login" type="submit" style={styles.loginSubmit}/>
          </Link>
          <Link to="/signup" >
            <input value="Create Account" type="submit" style={styles.createAccountSubmit} />
          </Link>
      </form>
    </div>
  );
}

export default SignIn;
