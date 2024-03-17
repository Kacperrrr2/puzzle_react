import React, { useEffect, useState } from 'react'
import Overlay from '../overlay/Overlay';
import "./Board.css";
import Tile from '../tile/Tile';
import NewGame from '../new-game/NewGame';
import Winner from '../winner/Winner';
function Board({size}) {
  
   const half_size=Math.sqrt((size*size/size));
  
  const shuffle = () => 
    new Array(size*size/size)
      .fill()
      .map((_,i) => i+1)
      .sort(() => Math.random() -.5)
      .map((x,i)=>({value : x,index :i}))
    console.log(shuffle());
  const [numbers,setNumbers]=useState([])
  const moveTile= tile =>{
    const i16=numbers.find(n=> n.value===(size*size/size)).index
    if(![i16-1,i16+1,i16-Math.sqrt(size),i16+Math.sqrt(size)].includes(tile.index))
      return
  


      const newNumbers = 
      [...numbers]
      .map(number => {
          if (number.index !== i16 && number.index !== tile.index)
              return number
          else if (number.value === (size*size/size))
              return {value: (size*size/size), index: tile.index}

          return {value: tile.value, index : i16}
      })
  
  setNumbers(newNumbers)
  


}

const reset =()=>setNumbers(shuffle())

  useEffect(reset,[])

  return (
    <div className='game'>
   <div style={{  
  display: 'grid',
  gridTemplateColumns: `repeat(${half_size}, var(--size))`,
  gridTemplateRows: `repeat(${half_size}, var(--size))`,
  borderRadius: '10px',
  position: 'relative',
  overflow: 'hidden',
  border: '10px solid #55ab9f'
}}>
        <Overlay size={size}/>
        {
          numbers.map((x,i)=>
           <Tile key={i} number={x} moveTile={moveTile} size={(size*size/size)}/>
          )}
        <Winner numbers={numbers} reset={reset}/>
        
      </div>
      <NewGame reset={reset}/>
    </div>
  )
}

export default Board