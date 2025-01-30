import { useState, useEffect, useRef } from "react";
function MyComponent () {
    const [number, setNumber] = useState(0)
    useEffect (()=>{
        
    })
    function handleClick(){
        setNumber(n=>n+1);
    }
    return (
            <>
            <h1>Number: {number}</h1>
            <button onClick={handleClick}>Click Me!</button>
            
            </>
    );
}
export default MyComponent