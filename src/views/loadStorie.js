import React, {useState, useEffect} from 'react';
import NavBar from "../components/navbar";
import axios from "axios";
//import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import "../styles/storie.css";
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const LoadStorie = props => {

  const [storie,setStorie] = useState({
    value:""
  });
  
  const load = ( async () =>{
    const loadStorie = await axios.get('http://localhost:4000/load', {
        id: "5cd339c2214e961df049d0a4"
    });
    let doc = new DOMParser().parseFromString(loadStorie.data.text, "text/xml");
    setStorie({value: loadStorie.data.text});
    console.log(doc)
  });

  useEffect(() => {
    load();
  }, []);

  let content = (   
    <div className="App">      
      <NavBar />
    </div>
  );
  return content
}
export default LoadStorie;