import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {hideModalGetStarted} from "../actionCreators";
import "../styles/getStarted.css";

const GetStarted = ({getFlag, hideGetStarted}) => {

  const inspect = (()=>{
    if(document.getElementById("name").value === ""){
      document.getElementById("name").classList.add("danger");
      document.getElementById("danger-name-get").classList.remove("hide");
    }else{
      document.getElementById("name").classList.remove("danger");
      document.getElementById("danger-name-get").classList.add("hide");
    }
    if(document.getElementById("email").value === ""){
      document.getElementById("email").classList.add("danger");
      document.getElementById("danger-email-get").classList.remove("hide")
    }else{
      document.getElementById("email").classList.remove("danger");
      document.getElementById("danger-email-get").classList.add("hide");
    }
    if(document.getElementById("password").value === ""){
      document.getElementById("password").classList.add("danger");
      document.getElementById("danger-password-get").classList.remove("hide")
    }else{
      document.getElementById("password").classList.remove("danger");
      document.getElementById("danger-password-get").classList.add("hide");
    }
    if(document.getElementById("name").value !== "" && 
       document.getElementById("email").value !== "" &&
       document.getElementById("password").value !== ""){
        register()
       }else{
         
       }
  })

  const register = (async ()=>{
    await axios.post('http://localhost:4000/register', {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });
    hideGetStarted();
    alert ("user created.");
  })

  let content = (
  <div>
    <div className={`form-overlay ${getFlag ? null: "hide"}`}>
        <div className="form-getStarted">
        <button className="form-getStarted-btn-close" onClick={hideGetStarted}>
          <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
        </button>
        <h1 className="form-getStarted-h1">Join Medium.</h1>
        <h2 className="form-getStarted-h2">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h2>
        <div className="form-getStarted-label">Your name</div>
        <input id="name" className="form-getStarted-imput"></input>
        <div id="danger-name-get" className="form-getStarted-label-danger hide">Please enter a name.</div>
        <div className="form-getStarted-label">Your email</div>
        <input id="email" className="form-getStarted-imput"></input>
        <div id="danger-email-get" className="form-getStarted-label-danger hide">Please enter a email.</div>
        <div className="form-getStarted-label">Your password</div>
        <input id="password" className="form-getStarted-imput" type="password"></input>
        <div id="danger-password-get" className="form-getStarted-label-danger hide">Please enter a password.</div>
        <div>
          <button className="form-getStarted-btn-submit" onClick={inspect}>Get started</button>
        </div>
        <div className="form-getStarted-btn-back" onClick={hideGetStarted}>←All sign in options</div>
        </div>
    </div>
  </div>      
  );
  return content
}

const mapStateToProps = state => {
  return {
    getFlag: state.getFlag
  };
}

const mapDispatchToProps = dispatch => {
  return {
    hideGetStarted () {
      dispatch(hideModalGetStarted());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);