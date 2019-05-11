import React, {useState, useEffect} from 'react';
import SignIn from "./signIn";
import GetStarted from "./getStarted";
import "../styles/banner.css";

const Banner = props => {

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
        <SignIn />
        <GetStarted />
      </div>      
    );
    return content
  }else{
    return null
  }
}
export default Banner;