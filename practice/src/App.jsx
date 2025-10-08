
import './App.css'
import Home from './components/home';
import About from './components/About';
import Counter from './components/counter';
function App() {
  
  let student1={
    names:"tejal",
    email:"tejal@gmail.com"
      }

      let student2={
    names:"sakshi",
    email:"sakshi@gmail.com"
      }

      let student3={
    names:"sanika",
    email:"sanika@gmail.com"
      }

      
let arr=[student1,student2,student3];
console.log(arr);

      
      
  return (
    <>
      <Home dev1={arr} ></Home>
      <Counter></Counter>
    </>
  )
}

export default App
