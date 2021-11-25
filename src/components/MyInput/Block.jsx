import React,{useState} from 'react';
import './Block.css'

const Block = (props)=>{

    return (
        <>
        <input className="inp" placeholder="Enter text"/>

        <button onClick={()=>console.log("Okay")} className="okay">
            Okay
         </button>

         <button onClick={()=>console.log("Cansel")} className="cansel">
             Cansel
          </button>
        </>
    )
}

export default Block;
