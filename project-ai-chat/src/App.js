import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
const [text, setText] = useState("");

const funText = (e)=>{
setText(e.target.value);
};

  return (
    <>
    <div className='box'>
      <div className='ai-ans'>{text}</div>
<form>
  <input type="text" value={text} onChange={funText}/>
<input type="button" value="Submit"/>
</form>
    </div>
    </>
  );
}

export default App;
