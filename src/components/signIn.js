import React, {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';
import axios from "axios";
import store from "../store";
import "../styles/signIn.css"

const SignIn = props => {

  const [signFlag, setSignFlag] = useState({
    flag: null
  });

  const [email, setEmail] = useState({
    value: ""
  });

  store.subscribe(()=>{
    setSignFlag({flag: store.getState().signFlag});
  });

  const hideSignIn = (() =>{
    store.dispatch({
      type:"TOOGLE_SIGN_FLAG",
      signFlag: false
    })
  });

  const toogleForms = (() =>{
    store.dispatch({
      type:"TOOGLE_GET_FLAG",
      getFlag: true
    })
    hideSignIn();
  });

  const signIn = (async ()=>{
    const token = await axios.post('http://localhost:4000/logIn', {
      email: document.getElementById("emailSignIn").value,
      password: document.getElementById("passwordSignIn").value
    });
    localStorage.setItem('token', JSON.stringify(token.data.token))
    hideSignIn();
  })

  let content = (
    <div>
      <div className={`form-overlay ${signFlag.flag ? null: "hide"}`}>
        <div className="form-signIn">
          <button className="form-signIn-btn-close" onClick={hideSignIn}>
            <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
          </button>
          <h1 className="form-signIn-h1">Welcome back.</h1>
          <h2 className="form-signIn-h2">Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</h2>
          <div className="form-signIn-label">Your email</div>
          <input id="emailSignIn" className="form-signIn-imput"></input>
          <div className="form-signIn-label">Your password</div>
          <input id="passwordSignIn" className="form-signIn-imput" type="password"></input>
          <div>
            <button className="form-signIn-btn-submit"  onClick={signIn}>Sign In</button>
          </div>
            <spam className="form-signIn-label" >No account? </spam>
            <a className="form-signIn-btn-back" onClick={toogleForms}>Create One</a>
        </div>
      </div>
    </div>      
  );
  return content
}
export default SignIn;