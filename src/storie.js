import React, {useState} from 'react';
import Editor from 'react-medium-editor';
import StorieMenu from "../components/storieMenu";
import MediumEditor from 'medium-editor';
import _ from 'lodash';
import axios from "axios";
import "../styles/storie.css";


require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

var MediumEditorMultiPlaceholders = MediumEditor.Extension.extend({
  name: 'multi_placeholder',
  init:  function() {
    this.placeholderElements = [];
    this.initPlaceholders(this.placeholders, this.placeholderElements);
    this.watchChanges();
  },

  initPlaceholders: function (placeholders, elements) {
      this.getEditorElements().forEach(function (editor) {
          this.placeholders.map(function(placeholder) {
            // Create the placeholder element
            var el = document.createElement(placeholder.tag);
            el.appendChild(document.createElement('br'));
            el.setAttribute('data-placeholder', placeholder.text);
            elements.push(el);
            // Append it to Medium Editor element
            editor.appendChild(el);
            this.updatePlaceholder(el);
          }, this);
      }, this);
  },

  destroy: function () {
      this.getEditorElements().forEach(function (editor) {
        editor.querySelectorAll('[data-placeholder]').map(function(el) {
          el.removeAttribute('data-placeholder');
        }, this);
      }, this);
  },

  showPlaceholder: function (el) {
      if (el) {
          el.classList.add('medium-editor-placeholder');
      }
  },

  hidePlaceholder: function (el) {
      if (el) {
          el.classList.remove('medium-editor-placeholder');
      }
  },

  updatePlaceholder: function (el) {
      // if one of these element ('img, blockquote, ul, ol') are found inside the given element, we won't display the placeholder
      if (el.textContent === '') {
          return this.showPlaceholder(el);
      }
      this.hidePlaceholder(el);
  },

  updateAllPlaceholders: function() {
    this.placeholderElements.map(function(el){
      this.updatePlaceholder(el);
    }, this);
  },

  watchChanges: function() {
    this.subscribe('editableInput', this.updateAllPlaceholders.bind(this));
    this.subscribe('externalInteraction', this.updateAllPlaceholders.bind(this));
  }
});

var MediumStorieMenu = MediumEditor.Extension.extend({
  name: 'MediumStorieMenu',
  init: function () {
    this.getEditorElements().forEach(function (element) {
      this.base.on(element, 'p', this.handleContextmenu.bind(this));
    }, this);
  },

  handleContextmenu: function (event) {
    document.createElement('StorieMenu')
  }
});

const menu =  new MediumStorieMenu();

const placeHolder = new MediumEditorMultiPlaceholders({
  placeholders: [
      {
        tag: 'h1',
        text: 'Title'
      },
      {
        tag: 'p',
        text: 'Tell your story...'
      }
]});

const Storie = props => {

  const [text,setText] = useState({
    value:""
  });

  const [id,setId] = useState({
    value:null
  });

  const handleChangeText = ((text) => {
    setText({value: text});
    saveDom();
  });

  const saveDom = _.debounce(async () => {
    let documento = document.getElementsByClassName("medium-editor-element")
    if(id.value){
      console.log(documento[0].outerHTML);
      console.log("Modifica la historia con ID: "+id.value)
      await axios.post('http://localhost:4000/update', {
        text: documento[0].outerHTML,
        id: id.value
      });
    }else{
      console.log(documento[0].outerHTML);
      let res = await axios.post('http://localhost:4000/create', {
        text: documento[0].outerHTML
      });
      console.log("Crea la historia con ID: " + res.data);
      setId({value: res.data});
    }
  }, 3000);

  let content = (
    <div className="app">
      <Editor
        options={{toolbar: {buttons:  [{name: 'bold', contentFA:"<i class=\"fas fa-bold\"></i>"},
                                      {name: 'italic', contentFA:"<i class=\"fas fa-italic\"></i>"},
                                      {name: 'underline', contentFA:"<i class=\"fas fa-underline\"></i>"},
                                      {name: 'anchor', contentFA:"<i class=\"fas fa-link\"></i>"},
                                      {name: 'h2', contentFA:"<i class=\"fas fa-heading\"></i>2"},
                                      {name: 'h3', contentFA:"<i class=\"fas fa-heading\"></i>3"},
                                      {name: 'quote', contentFA:"<i class=\"fas fa-quote-left\"></i>  <i class=\"fas fa-quote-right\"></i>"}]},
                  buttonLabels:'fontawesome',
                  placeholder: false,
                  autoLink: true,
                  extensions: {
                    'multi_placeholder': placeHolder,
                    'MediumStorieMenu': menu
                  }
                }}
        text={text.value}
        onChange={handleChangeText}
        id = "title"
        className = "storie-p"
      >
      </Editor>
      <StorieMenu />      
    </div>
  );
  return content
}

export default Storie;