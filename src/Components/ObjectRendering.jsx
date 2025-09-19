
function  Objects()
{
    let person1={

        id:1,
        names:"tejal",
        email:"tej@123",
        city:"nashik"
    }

    let person2={

        id:2,
        names:"sejal",
        email:"sej@123",
        city:"pune"
    }

    let arr=[person1,person2];

    return(
        <>
        <h2>returning the Array of JSON objects::</h2>
        <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
            <th style={{border:"1px solid black",padding:"8px"}}>Names</th>
            <th style={{border:"1px solid black",padding:"8px"}}>email</th>
            <th style={{border:"1px solid black",padding:"8px"}}>city</th>
         {
            arr.map((i)=>
            {
                return(
                <>
               <tr>
                <td style={{border:"1px solid black",padding:"8px"}}>{i.names}</td>
                <td style={{border:"1px solid black",padding:"8px"}}>{i.email}</td>
                <td style={{border:"1px solid black",padding:"8px"}}>{i.city}</td>
               </tr>


                </>
                )
            })
         } 
         </table>  
        </>
    )

}

export default Objects;