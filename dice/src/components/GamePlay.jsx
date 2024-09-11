import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Rules from './Rules';

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error,setError] = useState("");
  const [showRules,setShowrules] = useState(false)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const rollDice = () => {
    if(!selectedNumber) {
      setError("You Haven't Selected Any Number Yet.")
      return;
    };
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber)
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber) 
    } else {
      setScore((prev) => prev - 2)
    }
  }
  const resetScore = () =>{
    setScore(0);
  }
  const [rules,setRules] = useState(false);
  return (
    <div>
      <div className='flex justify-around items-end pt-6'>
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice  currentDice={currentDice} rollDice={rollDice} />
      <div className='flex justify-center items-center flex-col gap-1'>
        <button onClick={resetScore}className='cursor-pointer px-[6px] py-[10px] mt-2 bg-white border-2 border-solid border-black text-black rounded-md min-w-[220px] transition ease-in d duration-[0.6s] hover:bg-black  hover:transition hover:duration-[0.3s] hover:ease-in hover:text-white'>Reset</button>
        <button onClick={() => setShowrules((prev) => !prev)} className='cursor-pointer px-[6px] py-[10px] bg-black border-2 border-solid border-transparent text-white rounded-md min-w-[220px] transition ease-in d duration-[0.6s] hover:bg-white hover:border-2 hover:border-solid hover:border-black hover:transition hover:duration-[0.3s] hover:ease-in hover:text-black'>{showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules />}
    </div>
  )
}

export default GamePlay
