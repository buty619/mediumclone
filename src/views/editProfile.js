import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import store from "../store";
//import axios from "axios";

const EditProfile = props => {

  const [userInfo, setUserInfo] = useState({
    data: null
  });

  store.subscribe(()=>{
    setUserInfo({data: store.getState().userInfo});
  });

  let content = (   
    <div className="App">      
      <NavBar />
      <div>
        <div>
          <input></input>
          <input></input>
        </div>
        <div>
          <img></img>
        </div>
      </div>
      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
  return content
}
export default EditProfile;