import React from 'react';
import './MyButtom.css'

const MyButton = (props)=>{
    return (
    
<button className={props.className}>
        {props.children}
         </button>)
}

export default MyButton;