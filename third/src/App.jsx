// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ChangeColor } from './components/changecolor'
import { useState } from 'react'
import { Counter } from './components/counter'
import { Printname } from './components/printname'
import { createContext } from 'react'



let Student=createContext();

function App() {


  
  return (
    <>
      
    <ChangeColor></ChangeColor>
    <Counter></Counter>

    <Student.Provider value="tejal">
      <Printname></Printname>
    </Student.Provider>

    </>
  )
}

export default App
export {Student};        