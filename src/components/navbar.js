import React from 'react';
import { Link } from 'react-router-dom';
import OverMenu from "./overMenu";
import {connect} from "react-redux";
import {showModalGetStarted,showModalSignIn,showUserMenu,isLogIn} from "../actionCreators";
import "../styles/navbar.css"

const Navbar = ({overFlag,logInFlag,userInfo,showSignIn,showGetStarted,userMenu}) => {
  console.log(overFlag)


  let content = (
    <div className = "nav-container">
      <Link to="/">
        <svg className="nav-logo" width="122" height="45" ><path d="M61.6 31.806c0 .412 0 .505.28.758l1.574 1.537v.065h-6.979v-2.95a4.852 4.852 0 0 1-4.627 3.203c-3.588 0-6.192-2.81-6.192-7.981 0-4.843 2.81-8.075 6.754-8.075a4.122 4.122 0 0 1 4.056 2.51v-6.51a.806.806 0 0 0-.319-.787l-1.499-1.443v-.065l6.951-.815v20.553zm-5.125-.937v-9.714a2.614 2.614 0 0 0-2.08-.975c-1.695 0-3.334 1.537-3.334 6.099 0 4.271 1.414 5.78 3.175 5.78a2.81 2.81 0 0 0 2.24-1.19zm9.752 3.297V21.051a.88.88 0 0 0-.281-.786L64.4 18.672v-.065h6.98v13.302c0 .412 0 .505.28.758l1.536 1.443v.066l-6.97-.01zm-.253-20.356a2.81 2.81 0 1 1 5.62 0 2.81 2.81 0 0 1-5.62 0zm24.234 17.967c0 .413 0 .534.281.787l1.574 1.537v.065h-7.017v-3.363a5.077 5.077 0 0 1-4.805 3.616c-3.11 0-4.778-2.267-4.778-6.557 0-2.07 0-4.337.066-6.885a.796.796 0 0 0-.281-.76l-1.546-1.545v-.065h6.923v8.552c0 2.81.412 4.684 2.173 4.684a2.81 2.81 0 0 0 2.267-1.415v-9.367a.88.88 0 0 0-.28-.787l-1.556-1.602v-.065h6.979v13.17zm23.756 2.39c0-.507.094-6.952.094-8.432 0-2.81-.44-4.75-2.417-4.75a3.138 3.138 0 0 0-2.482 1.35c.198.876.292 1.772.28 2.67 0 1.948-.065 4.43-.093 6.913a.796.796 0 0 0 .281.759l1.574 1.442v.066h-7.045c0-.468.094-6.95.094-8.431 0-2.857-.44-4.75-2.389-4.75a2.81 2.81 0 0 0-2.323 1.387v9.555c0 .412 0 .506.281.759l1.537 1.442v.066h-6.97V21.098a.88.88 0 0 0-.281-.787l-1.546-1.639v-.065h6.98v3.334a5.002 5.002 0 0 1 5.002-3.587c2.323 0 3.896 1.292 4.562 3.747a5.433 5.433 0 0 1 5.245-3.747c3.11 0 4.872 2.295 4.872 6.632 0 2.07-.066 4.43-.094 6.913a.75.75 0 0 0 .318.759l1.537 1.443v.065h-7.017zm-87.671-2.043l2.07 1.977v.065H17.862v-.065l2.107-1.977a.796.796 0 0 0 .281-.759V18.728c0-.534 0-1.255.094-1.873l-7.082 17.564h-.084L5.843 18.26c-.16-.402-.206-.43-.31-.702v10.595c-.087.71.034 1.429.348 2.07l2.95 3.879v.065H1v-.065l2.95-3.888a3.69 3.69 0 0 0 .347-2.06v-11.71a2.267 2.267 0 0 0-.487-1.602l-2.089-2.708v-.065h7.494l6.277 13.686 5.527-13.686h7.335v.065l-2.061 2.296a.806.806 0 0 0-.319.786v16.15a.75.75 0 0 0 .319.759zm8.215-6.332v.065c0 4.01 2.07 5.62 4.497 5.62a5.105 5.105 0 0 0 4.777-2.894h.066c-.844 3.963-3.298 5.836-6.97 5.836-3.962 0-7.7-2.389-7.7-7.925 0-5.817 3.747-8.14 7.887-8.14 3.335 0 6.886 1.573 6.886 6.632v.806h-9.443zm0-.806h4.618v-.815c0-4.122-.852-5.218-2.136-5.218-1.555 0-2.5 1.64-2.5 6.033h.018z"/></svg>
        <svg className="nav-logo-xs" width="45" height="45" ><path d="M5 40V5h35v35H5zm8.56-12.627c0 .555-.027.687-.318 1.03l-2.457 2.985v.396h6.974v-.396l-2.456-2.985c-.291-.343-.344-.502-.344-1.03V18.42l6.127 13.364h.714l5.256-13.364v10.644c0 .29 0 .342-.185.528l-1.848 1.796v.396h9.19v-.396l-1.822-1.796c-.184-.186-.21-.238-.21-.528V15.937c0-.291.026-.344.21-.528l1.823-1.797v-.396h-6.471l-4.622 11.542-5.203-11.542h-6.79v.396l2.14 2.64c.239.292.291.37.291.768v10.353z"/></svg>
      </Link>      
      <div className = "nav-menu">
        <div onClick={showSignIn} className={`nav-signIn ${logInFlag ? "hide": null}`}>Sign in</div>
        <div onClick={showGetStarted} className={`nav-btn-start ${logInFlag ? "hide": null}`}>Get started</div>
        <Link to="/load" className={`nav-btn-start ${logInFlag ? null: "hide"}`}>Load</Link>
        <div className={`nav-userNav ${logInFlag ? null: "hide"}`} onClick={userMenu(!overFlag)}><img className="nav-userNav-img" src={userInfo.userImg} alt=""></img></div>        
        <OverMenu />
      </div>      
    </div>
  );
  return content
}

const mapStateToProps = state => {
  return {
    overFlag: state.overFlag,
    logInFlag: state.logInFlag,
    userInfo: state.userInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showSignIn () {
      dispatch(showModalSignIn());
    },
    showGetStarted () {
      dispatch(showModalGetStarted());
    },
    isLogIn () {
      dispatch(isLogIn());
    },
    userMenu (flag) {
      dispatch(showUserMenu(flag));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);