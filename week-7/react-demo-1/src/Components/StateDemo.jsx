import { useState } from "react";

function StateDemo(){
let [counter,setCounter]=useState(10) // re rendering
// marks should be an array; useState takes a single argument
let [marks,setMarks]=useState([10,20])
// email value must be a quoted string
let [user,setUser]=useState({email: "test@mergeAlias.com"})
const incr=()=>{
    setCounter(counter+1);
    //setCounter(counter+1);
    //setCounter(counter+1);
    //setCounter(counter+1);
    //Supply a function when the next value depends on the previous value
    setCounter((prevCounter)=>prevCounter+1);
}
const incrMarks=()=>{
   
    setMarks([...marks,123])
}
const decr=()=>{
    setCounter(counter-1)
}
const reset=()=>{
    setCounter(0);
}
const addMarks=()=>{
    setMarks([123,...marks])
}

const addCity = () => {
    // merge previous user object and add a new field
    setUser(prev => ({ ...prev, city: "Hyd" }));
}
//add element at begining
//add element in the end
//add element in between with index

//delete marks from the end of the array
return(
    <div>
        <p className="text-4xl">Counter: {counter}</p>
        <button onClick = {incr} className="bg-blue-200 px-5 py-2 mt-5">+</button>
        <button onClick = {decr} className="bg-blue-200 px-5 py-2 m-5">-</button>
        <button onClick = {reset} className="bg-red-500 px-5 py-2 m-5">reset</button>
        <h1>Marks</h1>
        {marks.map((m, index) => (
            <p key={index} className="text-4xl mt-10">{m}</p>
        ))}
       <button onClick={addMarks}>Add Marks</button>

       <p>User:</p>
    </div>
)};
export default StateDemo