import react from 'react'

const  Counter =() =>{
    const [count , setcount]= react.useState(0);
    const handleincrement =()=>{
        setcount (count +1);
        
    };
    const handledecrement =()=>{
        setcount (count -1);
        
    };

    return(

        <react.Fragment>
        
        <p>The count is: {count} </p>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        
        </react.Fragment>
        )
        


};



export default Counter;