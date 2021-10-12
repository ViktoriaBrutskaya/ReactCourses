import React, {useEffect, useState} from "react";//подгружаем из реакта хук useState 
const Clock=() =>{
    const [state, setState] = useState({
        date: new Date()
    })//неизменяемый массив, hooks
    useEffect(()=>timerUpdate(),[])//[]-зависимость(от чего зависит запуск useEffect )
    const timerUpdate=() => {
       setInterval(
        () => tick(),
        1000
      );
    }
  
    const tick=()=> {
      setState({
        date: new Date()
      });
    }
  
    
      return (
        <div>
          <h1>Привет, мир!</h1>
          <h2>Сейчас {state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  

  export default Clock;