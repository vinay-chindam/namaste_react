import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hello from React");
const jsxHeading=<h2 id="heading">Hello 
from jsx heading</h2> 


const NavbarComponent=()=>{
    return (
         <>
    <h3>Hello from navbar component</h3>

    </>

    )
   
}

const TitleComponent=()=>{
    return (
        <h2>I am from title component</h2>
    )
}

const HeadingComponent=()=>{
    return(
        <>
        <NavbarComponent/>
        <TitleComponent/>
        <h1>Hello from react heading component</h1> 
        </>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)