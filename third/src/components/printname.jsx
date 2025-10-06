import { Student } from "../App";

function Printname()
{
   return(
   <>
      <h2>In the PrintName </h2>

   <Student.Consumer>
      {
          (variable)=>
          {
            return(<>
            
            <h1>the name is:{variable}</h1>
            </>)
          }

      }
   </Student.Consumer>

    
   </>

   )
}


export {Printname};