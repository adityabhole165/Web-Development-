import { useEffect, useState } from "react";

export default function Counter(){
    // let [count, setCount] = useState(0);
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
   
    let incCountx = () =>{
        setCountx((currCount) => currCount + 1 );
    }
   
    let incCounty = () =>{
        setCounty((currCount) => currCount + 1 );
    }
    // let incCount = () =>{
    //     setCount((currCount) => currCount + 1 );
    // }
   
    // useEffect(function sideEffect() {
    //     console.log("this is the side Effect");
        
    // });

    useEffect(function sideEffect() {
        console.log("this is the side effect");
        
    },[])

    // useEffect(function sideEffect() {
    //     console.log("this is the side effect");
        
    // },[countx])
    return(
        <div>
            <h3>Counter ={countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>Counter ={county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}