import React, { useState } from 'react';
import TextToSpeech from "./TextToSpeech";
import './App.css';
import Translate from './Translate';

export const App = () => {
  const [text, setText] = useState('');
  
  return (
    <div className="App">
      <h1>React Text to Speech</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      
      <TextToSpeech text={<Translate/>}/>
      {/*<SpeechToText />*/}
    </div>
  );
};


export default App;
