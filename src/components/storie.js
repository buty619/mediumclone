import React from 'react';
import Editor from 'react-medium-editor';
import StorieMenu from "../components/storieMenu";
import Publish from "../components/publish";
import {connect} from "react-redux";
import axios from "axios";
import "../styles/storie.css";

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');


const Storie = ({storieId,showModalPublish}) => {

  const saveDom = (async () => {
    let documento = document.getElementsByClassName("medium-editor-element");
    let title = document.getElementById("title").value;
    if(document.getElementById("storieCont").getElementsByTagName('p')[0]){
      let firstP = document.getElementById("storieCont").getElementsByTagName('p')[0].textContent;
      console.log("Modifica la historia con ID: "+storieId)
      await axios.post('http://localhost:4000/update', {
        title: title,
        firstP: firstP,
        text: documento[0].outerHTML,
        id: storieId
      });
    }
    else{
      console.log("Modifica la historia con ID: "+storieId)
      await axios.post('http://localhost:4000/update', {
        title: title,
        firstP: "",
        text: documento[0].outerHTML,
        id: storieId
      });
    }
  });

  let content = (
    <div className="app">
      <input id="title" className ="storie-title" placeholder="Title" onChange={saveDom}></input>
      <Editor
        options={{toolbar: {buttons:  [{name: 'bold', contentFA:"<i class=\"fas fa-bold\"></i>"},
                                      {name: 'italic', contentFA:"<i class=\"fas fa-italic\"></i>"},
                                      {name: 'underline', contentFA:"<i class=\"fas fa-underline\"></i>"},
                                      {name: 'anchor', contentFA:"<i class=\"fas fa-link\"></i>"},
                                      {name: 'h2', contentFA:"<i class=\"fas fa-heading\"></i>2"},
                                      {name: 'h3', contentFA:"<i class=\"fas fa-heading\"></i>3"},
                                      {name: 'quote', contentFA:"<i class=\"fas fa-quote-left\"></i>  <i class=\"fas fa-quote-right\"></i>"}]},
                  buttonLabels:'fontawesome',
                  placeholder: {
                    text: 'Tell your story...',
                    hideOnClick: true
                  },
                  autoLink: true,
                }}
        onChange={saveDom}
        id = "storieCont"
        className = "storie-p"
      >
      </Editor>
      <StorieMenu />
      <Publish />      
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

export default connect(mapStateToProps, mapDispatchToProps)(Storie);