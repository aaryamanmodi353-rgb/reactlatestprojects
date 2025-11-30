import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
 // you can put whatever value you want to put for count
  let [count,setCount] = useState(9)


  
   const addval = () =>{
    
    console.log("value",Math.random())



  
    


    setCount(count+1)
   


    

   
   }


   const removeval = () =>{
    if (count > 0){
    setCount(count-1)
    }
   }
 
  
  //we are updating the value here but it is not getting updated since we are not using any kind of hooks in javascript we can directly update
  //the variables by using dom UI actions are controlled by react

  return (
    <>
  
    <h1>testing</h1>
    <h2>counting : {count} </h2>
    <button onClick={addval}>addVal</button>
    <button onClick={removeval}>removeVal</button>

    </>
    
  )
}

export default App
