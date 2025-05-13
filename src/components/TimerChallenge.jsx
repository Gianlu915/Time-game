import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {

   const timer = useRef();
   const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timeRemaining.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart(){
        timer.current = setInterval(() => {
           setTimeRemaining(prevTimeRemaing => prevTimeRemaing - 10);
        }, 10);

    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }


  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
    <section className="challenge">
        <h2>{title}</h2>
       <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
        </button>

        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Timer is running' : 'Timer inactive'}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge