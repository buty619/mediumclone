import React, {useState} from 'react';
import Editor from 'react-medium-editor';
import StorieMenu from "../components/storieMenu"
import MediumEditor from 'medium-editor'
import "../styles/storie.css"

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
                    'multi_placeholder': placeHolder
                  }
                }}
        text={title.text}
        onChange={handleChangeTitle}
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