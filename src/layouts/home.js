import React from "react";
import Navbar from "../components/navbar/navbar.js";
import Body from "./Body.jsx";
// import Comp from "../components/Comp.jsx";
import Count from "../components/Comp.jsx";

function Home(){
    return(
        <div className="main">
           <Navbar/>
           <Body/>
         <Count/>
           





           <h2>home is good</h2>
        </div>
    )
}
export default Home;