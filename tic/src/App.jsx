import React, { useState } from 'react'
import './index.css'
import Block from './components/Block'

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const checkWinner = (state) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) return true;
    } return false;
  }
  const handleBlockClick = (index) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
    const win = checkWinner(stateCopy);
    if (win) {
      alert(`Congratulations ${currentTurn} won the game.`);
    }
  }
  return (
    <div className='board mt-10 ml-96 p-14 border-2 border-solid border-black h-[500px] w-[500px] rounded-3xl '>
      <div className="row flex gap-3 p-3">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row flex gap-3 p-3">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row flex gap-3 p-3">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  )
}

export default App
