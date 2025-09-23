
// import './App.css'
import Home from './Components/home'
import { Careers } from './Components/home'
import About from './Components/about'
// import Display from './Components/rendering'
import Objects from './Components/ObjectRendering'
import { Contact } from './Components/home'
import { Consume } from './Components/props1'


function App() {
 
  let Student={
    names:"unique system skills",
    email:"uss@gmail.com",
    id:101
  }

  console.log(Student);
  

  return (
    
    // <div>
    //   <About></About>
    //   <Home></Home>
    //   <Careers></Careers>
    // <Contact></Contact>
    // </div> 
    // <Display></Display>
  //  <Objects></Objects>

  <Consume level={Student}></Consume>
  )
}

export default App
