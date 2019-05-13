import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import axios from "axios";
import "../styles/navbar.css";
import "../styles/storie.css";
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const Root = props => {

  const [allStorie,setAllStorie] = useState({
    value:""
  });
  
  const loadAll = ( async () =>{
    const allStories = await axios.post('http://localhost:4000/loadAll');
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
export default Root;