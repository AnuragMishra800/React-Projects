import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  const [gameStart, setGameStart] = useState(false);
  const toggleBtn = () => {
    setGameStart(!gameStart);
  };
  return (
    <div>
      {gameStart ? <GamePlay /> : <StartGame click={toggleBtn} />} 
    </div>
  )
}

export default App
