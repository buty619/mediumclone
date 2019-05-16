import React from 'react';
import NavBar from "../components/navbar"
import Storie from "../components/storie"
import "../styles/navbar.css"

const newStorie = props => {
  let content = (
    <div className="App">
      <NavBar />
      <Storie />
    </div>
  );
  return content
}
export default newStorie;