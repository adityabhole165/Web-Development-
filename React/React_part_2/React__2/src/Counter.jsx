import { useState } from "react";
export default function Counter() {
    // let count = 0;
    // let [stateVariable, setStateVariable] = useState(10);
    let [count,setCount] = useState(0);

    function inCount() {
        count += 1;
        console.log(count);
        setCount(count);
    }

    return (
        <div>
            <h3>Count = {count}</h3> 
            <button onClick={inCount}>Increase Count</button>     
        </div>
    );
}