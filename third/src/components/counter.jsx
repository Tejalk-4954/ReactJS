
import { useState } from 'react'
function Counter()
{
    let [colors,setColor]=useState("purple");

    function changeto()
    {
        setColor("red");
    }

    
    
    return(
        <>

        <button onClick={changeto}>change-color</button>
        <h1 style={{color:colors}}>this is a color to change</h1>
        </>
    )
}

export {Counter};