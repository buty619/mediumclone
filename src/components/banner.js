import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import store from "../store";
import "../styles/banner.css"

const Banner = props => {

  const [signFlag, setSignFlag] = useState({
    flag: ""
  });

  store.subscribe( ()=>{
    setSignFlag({flag: store.getState().signFlag});
  });

  const hideSignIn = (() =>{
    store.dispatch({
      type:"TOOGLE_SIGN_FLAG",
      signFlag: false
    })
  });

  console.log(signFlag);

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
          <div className = "banner-divider"></div>
        </div>
        <div className=""></div>
        <div id="form-overlay" className={`form-overlay ${signFlag.flag ? null: "hide"}`}>
          <div className="form-signIn">
            <button className="form-signIn-btn-close" onClick={hideSignIn}>
              <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
            </button>
            <h1 className="form-signIn-h1">Join Medium.</h1>
            <h2 className="form-signIn-h2">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h2>
            <div className="form-signIn-label">Your email</div>
            <input className="form-signIn-imput"></input>
            <div className="form-signIn-label">Your password</div>
            <input className="form-signIn-imput" type="password"></input>
            <div>
              <button className="form-signIn-btn-submit">Sign In</button>
            </div>
            <div className="form-signIn-btn-back" onClick={hideSignIn}>←All sign in options</div>
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