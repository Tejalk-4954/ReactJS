import Contact from "./Contactus";
function About(dev2){

    //console.log("From about page :",dev2);
    let dev3=dev2.dev2;
    return(
        <>
        <h1>This is about page</h1>
        <Contact dev3={dev3}></Contact>
        </>
    )
}

export default About;