
function Contact(dev3){


    let arr2=new Array();

    arr2[0]=dev3.dev3[0];
     arr2[1]=dev3.dev3[1];
      arr2[2]=dev3.dev3[2];

    return(

        <>
        <h3>This is contact us page</h3>
        {/* <ol> */}
            {
               arr2.map((i)=>
            {
                return(
                    <>
                    <p style={{color:"black"}}>Name::{i.names}</p>
                    <p>Email::{i.email}</p>
                    
                    </>
                )
            })
            }
            {/* </ol> */}
        </>
    )
}

export default Contact