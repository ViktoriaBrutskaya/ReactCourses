import React from "react";
import MyButton from "./components/MyButton/MyButton"
import Clock from "./components/MyButton/Clock"
import Counter from "./components/MyButton/Counter"
import MyButtonClass from "./components/MyButton/MyButtonClass"

const buttonArray=['success','primary','secondary','danger', 'warning']

const App = ()=> {
  return (
    <div className="App">
      <Clock/>
      {buttonArray.map((btn)=>
      <MyButton className={btn}>{btn}</MyButton>
        
      )}
      <Counter>Current count:</Counter>
    </div>
  );
}

export default App;

