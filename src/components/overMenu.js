import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {showUserMenu,logOut,userInfo,saveStorieId} from "../actionCreators";
import "../styles/navbar.css"

const OverMenu = ({overFlag,userInfo,userInfoDispach,userMenu,logOut,saveStorieId}) => {

  const logingOut = (()=>{
    logOut();
    userMenu(false);
    userInfoDispach({});
    localStorage.removeItem('token'); 
  });

  const toogleUserMenu = (() =>{
    userMenu(false);
  });

  const goToNew = (async () =>{
    userMenu(false);
    let res = await axios.post('http://localhost:4000/create',{
      userId:userInfo.userId
    });
    saveStorieId(res.data);
    console.log("Crea la historia con ID: " + res.data);
  });

  let content = (    
    <div className={`nav-userNav-over ${overFlag ? null: "hide"}`}>
      <div className="nav-userNav-over-arrow"></div>        
      <div className="nav-userNav-over-inner">
        <ul>
          <li>
            <div className="nav-userNav-over-head">
              <img className="nav-userNav-over-head-img" src={userInfo.userImg} alt=""></img>
              <p className="nav-userNav-over-head-p">{userInfo.name}</p>
            </div>
          </li>
          <li><div className="nav-userNav-over-separador"></div></li>
          <li><div className="nav-userNav-over-section" onClick={goToNew}><Link to="/new">New Story</Link></div></li>
          <li><div className="nav-userNav-over-separador" ></div></li>
          <li><div className="nav-userNav-over-section" onClick={toogleUserMenu}><Link to={`/${userInfo.userId}/EditProfile`}>Edit Profile</Link></div></li>
          <li><div className="nav-userNav-over-separador"></div></li>
          <li><div className="nav-userNav-over-section" onClick={logingOut}><Link to={`/`}>Sign out</Link></div></li>
        </ul>
      </div>
    </div>
  );
  return content
}

const mapStateToProps = state => {
  return {
    overFlag: state.overFlag,
    userInfo: state.userInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logOut () {
      dispatch(logOut());
    },
    userMenu (flag) {
      dispatch(showUserMenu(flag));
    },
    userInfoDispach (data) {
      dispatch(userInfo(data));
    },
    saveStorieId (value) {
      dispatch(saveStorieId(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverMenu);