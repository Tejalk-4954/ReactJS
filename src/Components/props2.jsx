
function Demo(data)
{
    /**
 * here use the destructuring , its a 2nd way 
 */

    return(
        <>

        <h1>this is the Demo function </h1>
        <h1>{data.names}</h1>
        <h1>{data.email}</h1>
        <h1>{data.id}</h1>
        
        </>

    )
}

export {Demo};