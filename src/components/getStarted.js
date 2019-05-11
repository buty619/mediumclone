import React, {useState, useEffect} from 'react';
import axios from "axios";
import store from "../store";
import "../styles/getStarted.css";

const GetStarted = props => {

  const [getFlag, setGetFlag] = useState({
    flag: null
  });

  const [email, setEmail] = useState({
    value: ""
  });

  store.subscribe(()=>{
    setGetFlag({flag: store.getState().getFlag});
  });

  const hideGetStarted = (() =>{
    store.dispatch({
      type:"TOOGLE_GET_FLAG",
      getFlag: false
    })
    setEmail({value:""})
  });

  const register = (async ()=>{
    await axios.post('http://localhost:4000/register', {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });
    hideGetStarted();
  })

  let content = (
  <div>
    <div className={`form-overlay ${getFlag.flag ? null: "hide"}`}>
        <div className="form-getStarted">
        <button className="form-getStarted-btn-close" onClick={hideGetStarted}>
          <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
        </button>
        <h1 className="form-getStarted-h1">Join Medium.</h1>
        <h2 className="form-getStarted-h2">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h2>
        <div className="form-getStarted-label">Your email</div>
        <input id="email" className="form-getStarted-imput"></input>
        {/* <input id="email" className="form-getStarted-imput" value={email.value} onKeyDown={setEmail({value:document.getElementById("email").value})}></input> */}
        <div className="form-getStarted-label">Your password</div>
        <input id="password" className="form-getStarted-imput" type="password"></input>
        <div>
          <button className="form-getStarted-btn-submit" onClick={register}>Sign In</button>
        </div>
        <div className="form-getStarted-btn-back" onClick={hideGetStarted}>←All sign in options</div>
        </div>
    </div>
  </div>      
  );
  return content

}
export default GetStarted;