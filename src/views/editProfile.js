import React  from 'react';
import NavBar from "../components/navbar";
import {connect} from "react-redux";
import axios from "axios";
import { Link } from 'react-router-dom';
import {userInfo,saveStorieId} from "../actionCreators";
import "../styles/editProfile.css";

const EditProfile = ({userInfo,userInfoUpdate,saveStorieId}) => {
  saveStorieId(null);
  let file = "";
  const loadImgs = (async (e)=>{
    var preview = document.getElementById('imgAvatar');
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

  const saveChanges = (async () => {
    const name = document.getElementById("newName").textContent;
    const bio = document.getElementById("newBio").textContent;
    if(file){
      var formData = new FormData();
      formData.append('image',file);
      let response = await axios.post("http://localhost:4000/uploadImg",formData);
      const url=response.data.imageUrl;

      const userUpdate = await axios.post('http://localhost:4000/updateUser', {
        name: name,
        bio: bio,
        userImg:url,
        id: userInfo.userId
      });
      userInfoUpdate(userUpdate.data.user);
    }else{
      const url = userInfo.userImg;
      const userUpdate = await axios.post('http://localhost:4000/updateUser', {
        name: name,
        bio: bio,
        userImg:url,
        id: userInfo.userId
      });
      userInfoUpdate(userUpdate.data.user);
    }
    
  });
  let content = (   
    <div className="App">      
      <NavBar />
      <div className="prof-container">
        <div className="prof-form">
          <h1 id="newName" className="prof-nameImput" contentEditable="true">{userInfo.name}</h1>
          <p id="newBio" className="prof-descriptionImput" contentEditable="true">{userInfo.bio}</p>
        </div>
        <div className="prof-img">
          <label for="image-input" >
            <img id="imgAvatar" src={userInfo.userImg} alt=""></img>
            <span><svg width="65" height="65"><g fillRule="evenodd"><path d="M10.61 44.486V23.418c0-2.798 2.198-4.757 5.052-4.757h6.405c1.142-1.915 2.123-5.161 3.055-5.138L40.28 13.5c.79 0 1.971 3.4 3.073 5.14 0 .2 6.51 0 6.51 0 2.856 0 5.136 1.965 5.136 4.757V44.47c-.006 2.803-2.28 4.997-5.137 4.997h-34.2c-2.854.018-5.052-2.184-5.052-4.981zm5.674-23.261c-1.635 0-3.063 1.406-3.063 3.016v19.764c0 1.607 1.428 2.947 3.063 2.947H49.4c1.632 0 2.987-1.355 2.987-2.957v-19.76c0-1.609-1.357-3.016-2.987-3.016h-7.898c-.627-1.625-1.909-4.937-2.28-5.148 0 0-13.19.018-13.055 0-.554.276-2.272 5.143-2.272 5.143l-7.611.01z"></path><path d="M32.653 41.727c-5.06 0-9.108-3.986-9.108-8.975 0-4.98 4.047-8.966 9.108-8.966 5.057 0 9.107 3.985 9.107 8.969 0 4.988-4.047 8.974-9.107 8.974v-.002zm0-15.635c-3.674 0-6.763 3.042-6.763 6.66 0 3.62 3.089 6.668 6.763 6.668 3.673 0 6.762-3.047 6.762-6.665 0-3.616-3.088-6.665-6.762-6.665v.002z"></path></g></svg></span>
          </label>          
          <input id="image-input" type="file" accept="image/gif, image/png, image/jpeg" onChange={loadImgs}/>          
        </div>
      </div>
      <div className="prof-container prof-btn-form">
        <button className="prof-btn-save" onClick={saveChanges}>
          <Link to="/">Save</Link>
        </button>
        <button className="prof-btn-cancel"><Link to="/">Cancel</Link></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);