import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import {connect} from "react-redux";
import axios from "axios";
import "../styles/navbar.css";
import "../styles/storie.css";
import "../styles/loadStorie.css";
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const LoadStorie = ({match}) => {

  const [storie,setStorie] = useState({
    value:""
  });

  const [user,setUser] = useState({
    value:""
  });
  
  const load = ( async () =>{
    const loadStorie = await axios.post('http://localhost:4000/load', {
      id: match.params.id
    });
    setStorie({value: loadStorie.data});
    const loadUser = await axios.post('http://localhost:4000/loadUser', {
      id: loadStorie.data.userId
    });
    setUser({value: loadUser.data.user});
  });

  const addLikeClass = (()=>{
    document.getElementById("like-btn").classList.toggle('like-active');
  });

  const addClapClass = (()=>{
    document.getElementById("clap-btn").classList.toggle('clap-active');
  });

  const addBookClass = (()=>{
    document.getElementById("book-btn").classList.toggle('book-active');
  });

  useEffect(() => {
    load();
  }, []);

  let content = (
       
    <div className="App">      
      <NavBar />
      <div className="load-container">        
        <div className="load-card">
          <h1 className="load-storie-title">{storie.value.title}</h1>
          <div className="load-card-user">
            <img className="load-card-user-img" src={user.value.userImg} alt=""></img>
            <p>{user.value.name}</p>
          </div>          
        </div>
        <img className="load-card-banner-img" src={storie.value.img} alt=""></img>
      </div>
      <div className="load-body" contentEditable="false" dangerouslySetInnerHTML={{ __html: storie.value.text }} />
    
      <div>
        <span id="like-btn" className="like-btn" onClick={addLikeClass}></span>
        <span id="clap-btn" className="clap-btn" onClick={addClapClass}></span>
        <svg id="book-btn" className="book-btn" onClick={addBookClass}><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126c.205.183.52.17.708-.03a.5.5 0 0 0 .118-.285H19V6z"></path></svg>
      </div>
    
    </div>
  );
  return content
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    newStorieFlag: state.newStorieFlag,
    storieId: state.storieId
  };
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadStorie);