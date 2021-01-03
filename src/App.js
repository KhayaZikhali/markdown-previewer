import React , {useState}from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [input, setInput] = useState();
  return (
    <div className="App">
       <h1 className="title">MARKDOWN PREVIEWER</h1>
       <div>
        <div className="left">
        <div className="MarkDiv">
           <h1 className="markTitle">Input Area</h1>
           <textarea className="editor" id="editor" value={input} onChange={(e)=>setInput(e.target.value)} ></textarea>
        </div>
        </div>
        <div className="right">
        <div className="previewDiv">
           <h1 className="previewTitle">Preview Area</h1>
           <ReactMarkdown className="previewer" source={input} renderers={{code : Component}}/>
        </div> 
        </div>
       </div> 
    </div>
  );
}

const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

export default App;
