import UseFetch from "./CustomHook"


function Single()
{
    let str="/get-all"

    return(<>
    
    <UseFetch props={str}></UseFetch>
    </>)

}

export default Single;