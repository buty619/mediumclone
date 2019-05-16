import React from 'react';
import {connect} from "react-redux";
import {showModalPublish} from "../actionCreators";
import { Link } from 'react-router-dom';
import axios from "axios";
import "../styles/publish.css";

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');


const Publish = ({storieInfo,publishFlag,storieId,showModalPublish}) => {
  let file = "";

  const loadImgs = (async (e)=>{
    var preview = document.getElementById('imgStorie');
    file = e.target.files[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  });

  const hidePublish = (()=>{
    showModalPublish(false);
  });

  const publishStorie = ( async () =>{
    if(file){
      var formData = new FormData();
      formData.append('image',file);
      let response = await axios.post("http://localhost:4000/uploadImg",formData);
      const url=response.data.imageUrl;
      console.log(url);
      await axios.post('http://localhost:4000/update', {
        title: storieInfo.title,
        firstP: storieInfo.firstP,
        text: storieInfo.text,
        img:url,
        publish: true,
        id: storieId
      });
    }else{
      await axios.post('http://localhost:4000/update', {
        title: storieInfo.title,
        firstP: storieInfo.firstP,
        text: storieInfo.text,
        img:"",
        publish: true,
        id: storieId
      });
    }
  });

  let content = (
    <div className={`publish-container ${publishFlag ? null: "hide"}`}>
      <div className="publish-card">
        <div className="publish-card-btn-close" onClick={hidePublish}>
            <span><svg width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61" fillRule="evenodd"></path></svg></span>
        </div>
        <div className="publish-card-container">
          <div className="publish-card-container-div">
            <p className="publish-card-container-div-title">Story Preview</p>
            <div className="publish-card-container-img">
              <label for="image-input" >
                <img id="imgStorie" src="" alt=""></img>
                <div className="publish-card-container-img-button">Change preview image</div>
              </label>          
              <input className="hide" id="image-input" type="file" accept="image/gif, image/png, image/jpeg" onChange={loadImgs}/>          
            </div>           
            <div className="mt15px">
              <p className="publish-card-container-div-storieTitle">{storieInfo.title ? storieInfo.title : null}</p>
              <p className="publish-card-container-div-staroeiParraft">{storieInfo.firstP ? storieInfo.firstP.slice(0,30) : null} ...</p>
            </div>
            <p className="publish-card-container-div-note"><b>Note: </b> Changes here will affect how your story appears in public places like Medium’s homepage — not the story itself.</p>
          </div>
          <div className="publish-card-container-div">
            <p className="publish-card-container-div-p">Add or change tags (up to 5) so readers know what your story is about</p>
            <input className="publish-card-container-input" type="text" placeholder="Add a tag..."></input>
            <div className="publish-card-container-form">
              <input type="checkbox"></input>
              <p className="publish-card-container-div-p">Allow curators to recommend my story to interested readers.<b>Recommended stories are part of Medium’s metered paywall.</b></p>              
            </div>
            <button className="publish-card-btn" onClick={publishStorie}><Link to="/">Publish Now</Link></button>
          </div>
        </div>
      </div>       
    </div>
  );
  return content
}

const mapStateToProps = state => {
  return {
    publishFlag: state.publishFlag,
    storieInfo: state.storieInfo,
    storieId: state.storieId    
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showModalPublish (flag) {
      dispatch(showModalPublish(flag));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Publish);