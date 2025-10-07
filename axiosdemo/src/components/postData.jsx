import axios from "axios";
import { useEffect, useState } from "react";

function PostData()
{
    let student={

        userId:100,
        title:"hey"
    }

    let[addinngdata,setaddingdata]=useState(true);

    let[obj,setobj]=useState({});

    useEffect(()=>{

        setTimeout(() => {
            
       
        axios.post("https://dummyjson.com/posts/add",student)
        .then((v)=>
        {
            console.log(v.data);
            setobj(v.data);
            setaddingdata(false);
            
        }).catch((e)=>
        {
            console.log(e);
            
        })
         }, 4000);
    },[])

    if(addinngdata)
        return <h1>Adding the data</h1>

    return(<>
    <h1>Data Added...</h1>

    <h2>{student.userId}</h2>
    </>)
}

export default PostData;