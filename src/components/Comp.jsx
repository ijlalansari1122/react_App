import React from  "react";
// import  "../components/"


const Count =() =>{
    const [count , setnum] = React.useState(1);

// function handle (){
//     setnum(count+2)
// }   
return(
<div id="count">
    <div className="top">
<h2>welcome to my counter :)</h2>
<p>The count is:{count} </p></div>
<div className="buttons">
{/* <button onClick={handle}>ADD</button> */}
{/* <button onClick={() => setCount(count *2)}>MULTIPLY</button> */}
<button onClick={()=>setnum(count + 4)}>Click</button>
</div>



</div>




)

    
}
 export  default Count;