import { useEffect, useState } from "react";

function Usefetch()
{

    let[book,setbook]=useState([]);

    let [loading,setloading]=useState(null);

    useEffect(()=>{

        fetch(url).
        then((v)=>
        {
            return v.json();
        }).
        then((v)=>
        {
            console.log(v);
            setbook(v);
            
        }).catch((e)=>
        {
            console.log(e);
            
        })

    },[url])



    if(loading==false)
    {
        return(<>
        
        <h1>fetching data ......</h1>
        </>)
    }


}

export default Usefetch;