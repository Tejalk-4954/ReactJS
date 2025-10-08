import { useState } from "react";

function Counter()
{
    let[count,setcount]=useState(10);

    function increase()
    {
        

        if(count<30)
        {
            setcount(++count);
        }

        else{

            
            window.alert("count cant be greater than 30");
        }


    }


    function decrease()
    {
        if(count>0)
        {
            setcount(--count);
        }

        else{
            window.alert("count cant be negative");
        }

    }

    function reset()
    {
        setcount(0);
    }

    return(<>
    <h1>{count}</h1>
    <button onClick={increase}>increase </button>
    <button onClick={decrease}>decrease</button>
    <button onClick={reset}>reset</button>
    </>)
}

export default Counter;