import About from "./About";
function Home(dev1){

    console.log("From app js page :",dev1);
    let dev2=dev1.dev1;
    return(
        <>
        <h1>This is home page</h1>

        <About dev2={dev2}></About>
        </>

    )
}

export default Home;