import React from "react";
import Navbar from "../components/navbar/navbar.js";
import Body from "./Body.jsx";


function Home(){
    return(
        <div className="main">
           <Navbar/>
           <Body/>
           <h2>home is good</h2>
        </div>
    )
}
export default Home;