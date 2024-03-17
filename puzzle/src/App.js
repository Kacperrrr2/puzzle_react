import React from 'react';
import { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import Start from './components/start/Start';
function App() {
  const [username,setUsername] =useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="App" >
      {username? (<Board username={username} selectedOption={parseInt(selectedOption)}/>): <Start setUsername={setUsername} setSelectedOption={setSelectedOption}/>}
    

    
    </div>
    
  )
}

export default App