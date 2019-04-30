import React, {useState} from 'react';
import Editor from 'react-medium-editor';
import StorieMenu from "../components/storieMenu"
import "../styles/storie.css"

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const Storie = props => {

  const [title,setTitle] = useState({
    text:""
  });

  const [paragraph,setParagraph] = useState({
    text:""
  });

  const handleChangeTitle = ((text) => {
    setTitle({text: text});
  });

  const handleChangeText = ((text) => {
    setParagraph({text: text});
  });

  let content = (
    <div className="app">
      <Editor
        options={{toolbar: {buttons: ['h2', 'h3', 'quote']}}}
        text={title.text}
        onChange={handleChangeTitle}
        id = "title"
        className = "storie-title"
        data-placeholder = "Title"
      >
        {/* <h2

        ></h2> */}
        
      </Editor>
      <Editor
        id = "text"
        className = "storie-p"
        data-placeholder = "Tell your story..."
        text={paragraph.text}
        onChange={handleChangeText}
      />
      <StorieMenu />
      
    </div>
  );
  return content
}

export default Storie;