import React from 'react'
import './Tile.scss'

const Tile=({number,moveTile,size})=>
    <div
        onClick={()=> moveTile(number)}
        className={`number ${number.value===number.index+1  ? 'correct' : ''} ${number.value===(size*size/size) ? 'disabled' : ''} slot--${number.index}`}>
            {number.value=== size? '': number.value}
        </div>
    export default Tile