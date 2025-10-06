import { useEffect, useState } from "react";

function Update()
{
    let[message,setmessage]=useState("");

    useEffect(()=>
    {
        setTimeout(()=>{
       fetch("http://localhost:8080/update-book",
            {
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                           id:0,
                           name:"chava",
                           price:355.46,
                           raings: 4.6
                })
            }
        )
      .then((v)=>
    {
        return v.text();
    })
    .then((v)=>
    {
        console.log(v);
        setmessage(v);
        
    })
    })
    },[])

    return(<>
    <h1>{message}</h1>
    </>)
}


export default Update;