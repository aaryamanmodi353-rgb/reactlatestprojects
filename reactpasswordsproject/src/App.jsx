import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  

  const[length,setLength] = useState(9);
  //useCallback is the hook that is use to update all the values of the functions together if clicked
  //the useCallback hook helps to cache a function defintion between re-renders 


  //the useCallback function consist of function and dependencies
  //the dependecies are added in the form of array

  const[numAllow,setVals] = useState(false);
  const[charAllow,setChar] = useState(false);
  const[password,setPassword] = useState("");
    const [copyPasswrds,setCopy] = useState(false)

  const passwrdRef = useRef(null)

  const createPassword = useCallback(() =>{
    let passwrd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz";
    if(numAllow){
      str += "0123456789";
    }
    if(charAllow){
      str += "#$%^&*()@+=[]{}";
    }

    for (let j = 1; j < length; j++) {
      //it is the way to generate the random characters
      //the main hooks used here are useCallback and useEffect useEffect just checks if the dependencies has got some changes and updates it 

      //the feature useEffect is used to run the code without it we cannot run the code since there are multiple dependencies 
      //it handles every dependencies

      //the hook which is used for reference is the useReference hook which is used to select the text when copied
      //it is also used to specify the range 
        let char = Math.floor(Math.random() * str.length+ 1);
        passwrd += str.charAt(char); 
      
    }
    setPassword(passwrd)

    

      
  },[length,numAllow,charAllow,setPassword])

  const copyPasswrd = useCallback(() => {
    passwrdRef.current?.select();
    passwrdRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
    setCopy(true)

    setTimeout(() => setCopy(false),2000)

  },[password])

  

  useEffect(() => {createPassword()},[length,numAllow,charAllow,createPassword

  ])
  
  


  return (
    <>
    <div className="w-full h-screen  items-center ">
  
  <div className="w-full max-w-xl p-20 bg-[#1e293b] text-white p-8 rounded-2xl shadow-lg">

    <h1 className="text-2xl font-semibold mb-4">
      Password generator
    </h1>

    <input
      type="text"
      value={password}
      className="w-full p-4 rounded-lg bg-white text-black outline-none shadow"
      placeholder="Password"
      readOnly
      ref={passwrdRef}
    />
    <button onClick={copyPasswrd}
    className='outline-none bg-yellow-400 text-white px-2 py-0.5 shrink-0'>{copyPasswrds ?"copied!":"copy"}</button>

  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type='range'
      min={6}
      max = {100}
      value={length}
      className='cursor-pointer'
      onChange={(event) => {setLength(event.target.value)}}
      />
      <label>Length:{length}</label>


    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox'defaultChecked={numAllow} id='numberInput' onChange={() => { setVals ((prev)=> !prev)}}></input>
      <label htmlFor='numberInput'>Numbers</label>

    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox'defaultChecked={charAllow} id='charInput' onChange={() => { setChar ((prev)=> !prev)}}></input>
      <label htmlFor='charInput'>Characters</label>
  </div>

</div>
</div>
    




    </>

  )
}

export default App
