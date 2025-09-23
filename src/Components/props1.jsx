
function Consume(data)
{
    /**
       here directly pass the object ,1st way
     */
  return(
    <> 
    
    <h1>This is a Consume Page:</h1>
    <h1>{data.level.names}</h1>
    <h1 style={{color:"purple"}}>{data.level.email}</h1>
    </>
  )
}

export {Consume};