import React  from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {hideModalSignIn, showModalGetStarted, isLogIn, userInfo} from "../actionCreators";
import "../styles/signIn.css"

const SignIn = ({signFlag,hideSignIn,showGetStarted,isLogIn,userInfo}) => {

  const toogleForms = (() =>{
    showGetStarted();
    hideSignIn();
  });

  const signIn = (async ()=>{
    const token = await axios.post('http://localhost:4000/logIn', {
      email: document.getElementById("emailSignIn").value,
      password: document.getElementById("passwordSignIn").value
    });

    localStorage.setItem('token', JSON.stringify(token.data.token))

    hideSignIn();
    isLogIn();
    userInfo(token.data.user);
  })

  let content = (
    <div>
      <div className={`form-overlay ${signFlag ? null: "hide"}`}>
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
            <span className="form-signIn-label" >No account? </span>
            <div className="form-signIn-btn-back" onClick={toogleForms}>Create One</div>
        </div>
      </div>
    </div>      
  );
  return content
}

const mapStateToProps = state => {
  return {
    signFlag: state.signFlag
  };
}

const mapDispatchToProps = dispatch => {
  return {
    hideSignIn () {
      dispatch(hideModalSignIn());
    },
    showGetStarted () {
      dispatch(showModalGetStarted());
    },
    isLogIn () {
      dispatch(isLogIn());
    },
    userInfo (data) {
      dispatch(userInfo(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);