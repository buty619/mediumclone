import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import axios from "axios";
import {saveStorieId,showModalPublish} from "../actionCreators";
import {connect} from "react-redux";
import "../styles/navbar.css";
import "../styles/storie.css";
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const Root = ({saveStorieId,showModalPublish}) => {
  saveStorieId(null);
  showModalPublish(false);
  const [allStorie,setAllStorie] = useState({
    value:""
  });
  
  const loadAll = ( async () =>{
    const allStories = await axios.get('http://localhost:4000/loadAll');
    setAllStorie({value:allStories.data});
  });

  useEffect(() => {
    loadAll();
  }, []);

  let content = (   
    <div className="App">      
      <NavBar />
      <Banner data={allStorie}/>
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
    saveStorieId (value) {
      dispatch(saveStorieId(value));
    },
    showModalPublish (flag) {
      dispatch(showModalPublish(flag));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);