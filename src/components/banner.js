import React from 'react';
import SignIn from "./signIn";
import GetStarted from "./getStarted";
import BannerList from "./bannerList";
import { Link } from 'react-router-dom';
import "../styles/banner.css";

const Banner = props => {

  if(props.data.value[4]){
    let content = (
      <div>

        <div className="banner-container">
          
          <div className = "banner-left">
            <Link to={"/storie/"+props.data.value[0]._id}>
              <div><img src={props.data.value[0].img} alt=""></img></div>
              <div><h1>{props.data.value[0].title}</h1></div>
              <div><p>{props.data.value[0].firstP.slice(0,100)} ...</p></div>
            </Link>
          </div>
          

          <div className = "banner-list">
            <Link to={"/storie/"+props.data.value[1]._id}>
              <div><img src={props.data.value[1].img} alt=""></img></div>
              <div>
                <div><h2>{props.data.value[1].title}</h2></div>
                <div><p>{props.data.value[1].firstP.slice(0,50)} ...</p></div>
              </div>
            </Link>
          </div>

          <div className = "banner-list">
            <Link to={"/storie/"+props.data.value[2]._id}>
              <div><img src={props.data.value[2].img} alt=""></img></div>
              <div>
                <div><h2>{props.data.value[2].title}</h2></div>
                <div><p>{props.data.value[2].firstP.slice(0,50)} ...</p></div>
              </div>
            </Link>
          </div>
          <div className = "banner-list">
            <Link to={"/storie/"+props.data.value[3]._id}>
              <div><img src={props.data.value[3].img} alt=""></img></div>
              <div>
                <div><h2>{props.data.value[3].title}</h2></div>
                <div><p>{props.data.value[3].firstP.slice(0,50)} ...</p></div>
              </div>
            </Link>
          </div>
          <div className = "banner-rigth">
            <Link to={"/storie/"+props.data.value[4]._id}>
              <div><img src={props.data.value[4].img} alt=""></img></div>
              <div><h2>{props.data.value[4].title}</h2></div>
              <div><p>{props.data.value[4].firstP.slice(0,50)} ...</p></div>
            </Link>
          </div>
          <a href="#more"className = "banner-seemore">SEE ALL FEATURED ></a>
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
        <div className = "banner-divider"></div>
        <div id="more">
          {props.data.value.filter(storie => storie.publish === true).map((data) => {
            return <BannerList data={data}/>
          })}
        </div>       
      </div>      
    );
    return content
  }else{
    let content =  (
      <div>
        <SignIn />
        <GetStarted />
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
        <div className = "banner-divider"></div>
      </div>
    );
    return content
  }
}
export default Banner;