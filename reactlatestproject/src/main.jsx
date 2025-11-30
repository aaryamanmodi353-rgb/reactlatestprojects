import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


import App from './App.jsx'


//the function defined here can also be used and the fucntion is converted into object in js 



const word = {
    type : 'a',

    props:{
        href: 'https://youtube.com',
        target:'_blank'
    },
    children: 'Youtube'

}

function Click(){
  return (
  <>
  <h1> Clicking </h1>

  </>
  )

}

const wordnew = (
  <a href='https://www.google.com'>Google</a>
)

const obj = "new materials added"


//('name of the tag',{attribute},text,evaluated exp)

const anotherWord = React.createElement('a',{href: 'https://www.google.com',target:'_blank'},
  'Google', obj
)


createRoot(document.getElementById('root')).render(

<App/>
)
