import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from "./context/contextprovider"
import Login from './components/login'
import Profile from './components/profile'

function App() {
 

  return (

    <Usercontextprovider>
    <h1>React and api</h1>
    <Login/>
    <Profile/>
    </Usercontextprovider>
   
      
  )
}

export default App
