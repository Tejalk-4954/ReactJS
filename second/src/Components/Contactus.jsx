function Contact(dev3){


    let arr2=new Array();

    arr2[0]=dev3.dev3[0];
     arr2[1]=dev3.dev3[1];
      arr2[2]=dev3.dev3[2];

    return(

        <>
        <h1>This is contact us page</h1><ol>
            {
               arr2.map((i)=>
            {
                return(
                    <>
                    
                    <li>{i.names}</li>
                    </>
                )
            })
            }
            </ol>
        </>
    )
}

export default Contact