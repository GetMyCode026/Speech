import React from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone } from "react-icons/fa";
import { IoStopCircleOutline } from "react-icons/io5";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <h2>Microphone : {listening ? 'on' : 'off'}</h2>
        <h2>Please Start Button and Say Hello !</h2>
      <button className='btn btn-primary btm' onClick={SpeechRecognition.startListening}> <FaMicrophone/>Start</button>
      <button className='btn btn-danger btm' onClick={SpeechRecognition.stopListening}> <IoStopCircleOutline/>Stop</button>
      <button className='btn btn-warning btm' onClick={resetTranscript}>Reset</button>
      <p className='script'>{transcript}</p>

        </div>
      </div>
      
    </div>
  );
};
export default App;