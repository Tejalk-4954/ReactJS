import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/navbar'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      

      <Navbar></Navbar>
      <Outlet></Outlet>
      <h1>App.jsxn</h1>
    </>
  )
}

export default App
