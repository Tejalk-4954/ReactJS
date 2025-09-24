import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './Components/Home'

function App() {

  let obj1={
    names:"Sanika",
    age:23
  }

  //  let obj2=obj1;
  //  let obj3=obj1;
  //  console.log(obj1);
  //  console.log(obj2);
  //  console.log(obj3);

  let obj2={...obj1,names:"tejal"};
  let obj3={...obj1,names:"Sakshi"};
   let arr=[obj1,obj2,obj3];

  return (
    <>
    <Home dev1={arr}></Home>
    </>
  )
}

export default App
