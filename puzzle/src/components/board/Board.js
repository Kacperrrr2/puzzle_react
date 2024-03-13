import React from 'react'
import Overlay from '../overlay/Overlay';
import "./Board.css";
function Board() {
  const shuffle = () => 
    new Array(16)
      .fill()
      .map((_,i) => i+1)
      .sort(() => Math.random() -.5)
    console.log(shuffle());

  return (
    <div className='game'>
      <div className='board'>
        <Overlay/>
      </div>
    </div>
  )
}

export default Board