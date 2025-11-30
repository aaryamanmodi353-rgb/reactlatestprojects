import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./Cards.jsx"


function App() {

  const myObjs = {
    name: "kim",
    age: 25
  }

  //we can use props like this username or channel to show different cards or functions

  //if we are using the same function two times we can differentiate between the two using props 
  let myArrs = [1,2,4,]
  
  const [count, setCount] = useState(0);

  return (
    <>
     <Cards channel="Subscription" btnText = "click it"/>
     <Cards channel= "Example" btnText = "click here"/>
    
    </>
  );
}

export default App;
