import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import StorieCard from "../components/storieCard";
import {connect} from "react-redux";
import axios from "axios";
import {userInfo,saveStorieId} from "../actionCreators";
import "../styles/list.css";

const ListStories = ({userInfo,saveStorieId}) => {
  saveStorieId(null);

  const [allStorie,setAllStorie] = useState({
    value:[]
  });

  const [fillStorie,setFillStorie] = useState({
    value:[]
  });

  useEffect(() => {
    loadUserStories();
  }, []);

  const loadUserStories = ( async () =>{
    const loadStories = await axios.post('http://localhost:4000/loadUserStories',{
      id:userInfo.userId
    });
    setAllStorie({value:loadStories.data});
    setFillStorie({value:loadStories.data.filter(storie => storie.publish === false)});
  });

  const activeDrafts = (()=>{
    document.getElementById("draft").classList.add("active");
    document.getElementById("publisher").classList.remove("active");
    setFillStorie({value:allStorie.value.filter(storie => storie.publish === false)});
  })

  const activePublisher = (()=>{
    document.getElementById("draft").classList.remove("active");
    document.getElementById("publisher").classList.add("active");
    setFillStorie({value:allStorie.value.filter(storie => storie.publish === true)});
  })

  let content = (   
    <div className="App">      
      <NavBar />
      <div className="list-container">
        <div className="list-top">
          <div className="list-top-title"><b>Your stories</b></div>
        </div>
        <div className="list-menu">
          <div id="draft" className="list-menu-option active" onClick={activeDrafts}>Drafts {allStorie.value.filter(storie => storie.publish === false).length}</div>
          <div id="publisher" className="list-menu-option" onClick={activePublisher}>Published {allStorie.value.filter(storie => storie.publish === true).length}</div>
        </div>
        <div className="list">
          {fillStorie.value.map((data) => {
            return <StorieCard data={data}/>
          })}
        </div>
      </div>
    </div>
  );
  return content
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    newStorieFlag: state.newStorieFlag
  };
}

const mapDispatchToProps = dispatch => {
  return {
    userInfoUpdate (data) {
      dispatch(userInfo(data));
    },
    saveStorieId (value) {
      dispatch(saveStorieId(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListStories);