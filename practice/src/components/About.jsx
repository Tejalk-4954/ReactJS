import Contact from "./contactus";
function About(dev2){

    //console.log("From about page :",dev2);
    let dev3=dev2.dev2;
    return(
        <>
        <h2>This is about page</h2>
        <Contact dev3={dev3}></Contact>
        </>
    )
}

export default About;