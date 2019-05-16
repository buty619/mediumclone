import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import {connect} from "react-redux";
import axios from "axios";
//import { Link } from 'react-router-dom';
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
            <img className="load-card-user-img" src={user.value.userImg}></img>
            <p>{user.value.name}</p>
          </div>          
        </div>
        <img className="load-card-banner-img" src={storie.value.img}></img>
      </div>
      <div className="load-body" contentEditable="false" dangerouslySetInnerHTML={{ __html: storie.value.text }} />
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