import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../styles/card.css";

const StorieCard = ({data}) => {

  const deleteStorie = (async ()=>{
    await axios.post('http://localhost:4000/delete', {
      id: data._id
    });
  })
  
  let content = (
    <div  id="card" className="app">
      <div className="card-container">
        <Link to={`/storie/`+data._id} className="card-app">
          <div className="card-title"><b>{data.title}</b></div>
        </Link>
        <div className="card-p">{data.firstP ? data.firstP.slice(0,30):null} ...</div>
        <div className="card-bottom">
          <div className="card-id">{data._id}</div>
          <Link to="/"><i className="fas fa-trash-alt" onClick={deleteStorie}></i></Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StorieCard);