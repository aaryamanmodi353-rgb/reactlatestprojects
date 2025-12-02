import { useState } from 'react'

import Footer from './components/foot/footer'
import Header from './components/head/header'
import Home from './components/home/home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    
    </>
  )
}

export default App



