import React, {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';
import axios from "axios";
import store from "../store";
import "../styles/banner.css"

const Banner = props => {

  const [signFlag, setSignFlag] = useState({
    flag: null
  });

  const [getFlag, setGetFlag] = useState({
    flag: null
  });

  const [email, setEmail] = useState({
    value: ""
  });

  store.subscribe(()=>{
    setSignFlag({flag: store.getState().signFlag});
    setGetFlag({flag: store.getState().getFlag});
  });

  const hideSignIn = (() =>{
    store.dispatch({
      type:"TOOGLE_SIGN_FLAG",
      signFlag: false
    })
  });

  const hideGetStarted = (() =>{
    store.dispatch({
      type:"TOOGLE_GET_FLAG",
      getFlag: false
    })
  });

  const toogleForms = (() =>{
    store.dispatch({
      type:"TOOGLE_GET_FLAG",
      getFlag: true
    })
    hideSignIn();
  });

  const register = (async ()=>{
    await axios.post('http://localhost:4000/register', {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });
    hideGetStarted();
  })

  if(props.data.value[0]){
    let content = (
      <div>
        <div className="banner-container">
          <div className = "banner-left">
            <div><img src={props.data.value[0].img} alt=""></img></div>
            <div><h1>{props.data.value[0].title}</h1></div>
            <div><p>{props.data.value[0].firstP.slice(0,100)} ...</p></div>
          </div>
          <div className = "banner-list">
            <div><img src={props.data.value[1].img} alt=""></img></div>
            <div>
              <div><h2>{props.data.value[1].title}</h2></div>
              <div><p>{props.data.value[1].firstP.slice(0,50)} ...</p></div>
            </div>
          </div>
          <div className = "banner-list">
            <div><img src={props.data.value[2].img} alt=""></img></div>
            <div>
              <div><h2>{props.data.value[2].title}</h2></div>
              <div><p>{props.data.value[2].firstP.slice(0,50)} ...</p></div>
            </div>
          </div>
          <div className = "banner-list">
            <div><img src={props.data.value[3].img} alt=""></img></div>
            <div>
              <div><h2>{props.data.value[3].title}</h2></div>
              <div><p>{props.data.value[3].firstP.slice(0,50)} ...</p></div>
            </div>
          </div>
          <div className = "banner-rigth">
            <div><img src={props.data.value[4].img} alt=""></img></div>
            <div><h2>{props.data.value[4].title}</h2></div>
            <div><p>{props.data.value[4].firstP.slice(0,50)} ...</p></div>
          </div>
          <div className = "banner-seemore">SEE ALL FEATURED ></div>
        </div>
        <div className = "banner-divider"></div>
        <div className="banner-directSignin">
          <div className="banner-directSignin-img"></div>
          <div className="banner-directSignin-content">
            <h1 >Never miss a  story</h1>
            <p>Sign up for Medium’s Daily Digest and get the best of Medium, tailored for you.</p>
            <div className="banner-directSignin-form">
              <input className="banner-directSignin-imput" placeholder="Email Address"></input>
              <button className="banner-directSignin-btn-submit">Sign up</button>
            </div>
          </div>
        </div>
        <div className={`form-overlay ${getFlag.flag ? null: "hide"}`}>
          <div className="form-getStarted">
            <button className="form-getStarted-btn-close" onClick={hideGetStarted}>
              <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
            </button>
            <h1 className="form-getStarted-h1">Join Medium.</h1>
            <h2 className="form-getStarted-h2">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h2>
            <div className="form-getStarted-label">Your email</div>
            <input id="email" className="form-getStarted-imput">{email}</input>
            <div className="form-getStarted-label">Your password</div>
            <input id="password" className="form-getStarted-imput" type="password"></input>
            <div>
              <button className="form-getStarted-btn-submit" onClick={register}>Sign In</button>
            </div>
            <div className="form-getStarted-btn-back" onClick={hideGetStarted}>←All sign in options</div>
          </div>
        </div>
        <div className={`form-overlay ${signFlag.flag ? null: "hide"}`}>
          <div className="form-signIn">
            <button className="form-signIn-btn-close" onClick={hideSignIn}>
              <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
            </button>
            <h1 className="form-signIn-h1">Welcome back.</h1>
            <h2 className="form-signIn-h2">Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</h2>
            <div className="form-signIn-label">Your email</div>
            <input className="form-signIn-imput"></input>
            <div className="form-signIn-label">Your password</div>
            <input className="form-signIn-imput" type="password"></input>
            <div>
              <button className="form-signIn-btn-submit">Sign In</button>
            </div>
              <spam className="form-signIn-label">No account? </spam>
              <a className="form-signIn-btn-back" onClick={toogleForms}>Create One</a>
          </div>
        </div>
      </div>      
    );
    return content
  }else{
    return null
  }
}
export default Banner;