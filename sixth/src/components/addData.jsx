import { useEffect, useState } from "react"

function Add()
{
    let book={
        id:100,
        name:"yayati",
        price:110,
        ratings:9.0
    }

    let[data,setdata]=useState({});

    let [flag,setflag]=useState(false);
    // let[addedbook,setaddedbook]=useState(book);

    useEffect(()=>
    {
        setTimeout(()=>{
        fetch("http://localhost:8080/add-book",
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(book)
            }
        )
        .then((v)=>{
            return v.json();
        })
        .then((v)=>
        {
            console.log(v);
            setdata(v);
            console.log(data);
            setflag(true)
         
        })
        },3000)
    },[])

    if(flag==false)

        return(<>
        <h1>Adding the data</h1>
        </>)
    return(<>
    <h1>Added the data</h1>
    </>)
}

export default Add;