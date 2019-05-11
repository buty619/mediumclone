import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import store from "../store";
import "../styles/navbar.css"

const OverMenu = props => {
  
  const [overFlag, setOverFlag] = useState({
    flag: null
  });

  store.subscribe(()=>{
    setOverFlag({flag: store.getState().overFlag});
  });

  let content = (    
    <div className={`nav-userNav-over ${overFlag.flag ? null: "hide"}`}>
      <div className="nav-userNav-over-arrow"></div>        
      <div className="nav-userNav-over-inner">
        <ul>
          <li>
            <div className="nav-userNav-over-head">
              <img className="nav-userNav-over-head-img" src="https://s3.us-east-2.amazonaws.com/mediumclonemakeitreal/user2.jpg" alt=""></img>
              <p className="nav-userNav-over-head-p">Cristian Felipe Buitrago</p>
            </div>
          </li>
          <li><div className="nav-userNav-over-separador"></div></li>
          <li><div className="nav-userNav-over-section"><Link to="/new">New Story</Link></div></li>
          <li><div className="nav-userNav-over-separador"></div></li>
          <li><div className="nav-userNav-over-section">Sign out</div></li>
        </ul>
      </div>
    </div>
  );
  return content
}
export default OverMenu;