

function Display()
{

   let arr=[10,20,30,40,50,60,70];

    let arr2=arr.map((i)=>
    {
        return (i*2);
    })

    console.log(arr2);

    return(
        <>
        <h1>{arr.length}</h1>
        <h2>{typeof(arr)}</h2>
        <h3 style={{color:"red"}}>The elements of given array:</h3>

        <ol>
            {
                arr.map((i)=>
                {
                    return(
                        <li style={{color:"brown",fontWeight:"bolder"}}>{i}</li>
                    )
                })
            }
        </ol>
        
        </>
    )
    
}

export default Display;