import React from 'react';
import './App.css'
// create a text area
// create a previeew area that renders the text area
// add resize buttons

class TextArea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    };
 render () {
     return (
        <div className="MarkDiv">
           <h1 className="markTitle">MarkDown Area</h1>
           <textarea className="editor"></textarea>
        </div>
     )
  };     
}

class PreviewArea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    };
 render () {
     return (
        <div className="previewDiv">
           <h1 className="previewTitle">Preview Area</h1>
           <textarea className="previewer"></textarea>
        </div>
     )
  };    
}

export { TextArea, PreviewArea } 