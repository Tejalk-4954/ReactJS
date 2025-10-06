
import { useState } from 'react'

function ChangeColor(){

let[counter,setCounter]=useState(10);

function increase()
{
    setCounter(++counter);
}

function decrease()
{
    if(counter>0)
    {
        setCounter(--counter);
    }
    else
    {
        window.alert("....INVALID...")
    }
}

function reset(){

    setCounter(10);
}


return(
    <>
    <h2>Inspect the value of the counter::</h2>
    <h1>{counter}</h1>
    <button onClick={increase}>Increase_counter</button>
    <button onClick={decrease}>decrease_counter</button>
    <button onClick={reset}>reset_counter</button>
    </>
)

}


export {ChangeColor};