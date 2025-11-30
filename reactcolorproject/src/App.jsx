import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  



  const [color,setColor] = useState("pink")

  return (
    <>
   <div className='w-full h-screen duration-500' style={{backgroundColor: color}}>
   

   <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-5'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
   <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
  <button onClick={() => setColor("red")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "red"}}>Red</button>
  <button onClick={() => setColor("blue")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "blue"}}>Blue</button>
  <button onClick={() => setColor("yellow")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "yellow"}}>Yellow</button>
  <button onClick={() => setColor("pink")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "pink"}}>Pink</button>
  <button onClick={() => setColor("purple")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "purple"}}>Purple</button>
  <button onClick={() => setColor("green")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "green"}}>Green</button>
  <button onClick={() => setColor("brown")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "brown"}}>Brown</button>
  <button onClick={() => setColor("white")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "white"}}>White</button>
  <button onClick={() => setColor("lightblue")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0 bg-blue-200'>Light Blue</button>
  <button onClick={() => setColor("indigo")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "indigo"}}>Indigo</button>
  <button onClick={() => setColor("orange")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "orange"}}>Orange</button>
  <button onClick={() => setColor("grey")} className='px-5 py-1 shadow-lg rounded-full focus:outline-none focus:ring-0' style={{backgroundColor: "grey"}}>Grey</button>
</div>





    </div>
   </div>
   </div>
    </>
  )
}

export default App
