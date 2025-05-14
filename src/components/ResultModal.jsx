import React, { useImperativeHandle,useRef } from 'react'

const ResultModal = ({ ref,targetTime, remainingTime, onReset}) => {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / targetTime * 1000) * 100);

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

  return (
    <dialog ref={dialog} className='result-modal'>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your Score : {score}</h2>}
        <p>
            The target time was <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <p>
            You stopped the timer with <strong></strong>
        </p>
        <form method='dialog'>
            <button onSubmit={onReset}>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal