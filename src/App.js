import './App.css';
import {TextArea , PreviewArea }  from './textArea' 

function App() {
  return (
    <div className="App">
       <h1 className="title">MARKDOWN PREVIEWER</h1>
       <div className="left">
         <TextArea/>
       </div>
       <div className="right">
         <PreviewArea />
       </div>
    </div>
  );
}

// create a text area
// create a preview area that renders the text area
// add resize buttons

export default App;
